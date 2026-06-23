
const jogos = document.getElementById("jogos");


async function atualizaPlacar() {

    try {

    const url = 'https://worldcup26.ir/get/games'
    const response = await fetch(url)
    const dados = await response.json()

    jogos.innerHTML = "";

    dados.games.local_date.forEach(element => {
        const jogo = document.createElement("div");
        jogo.classList.add("jogo");

        const horario = document.createElement("div");
        horario.classList.add("horario");
        horario.innerText = element.horario;
        jogo.appendChild(horario);

        const times = document.createElement("div");
        times.classList.add("times");

        const time1 = document.createElement("div");
        time1.classList.add("time");
        time1.innerText = element.time1;
        times.appendChild(time1);

        const placar = document.createElement("div");
        placar.classList.add("placar");
        placar.innerText = `${element.placar1} x ${element.placar2}`;
        times.appendChild(placar);

        const time2 = document.createElement("div");
        time2.classList.add("time");
        time2.innerText = element.time2;
        times.appendChild(time2);

        jogo.appendChild(times);

        const status = document.createElement("div");
        status.classList.add("status");
        status.innerText = element.status;
        jogo.appendChild(status);

        jogos.appendChild(jogo);
    });

   } catch (error) {
       console.error("Erro ao buscar dados:", error);
   }

   setTimeout(atualizaPlacar, 30000);

}

atualizaPlacar();