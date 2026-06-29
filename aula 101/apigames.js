const jogos = document.getElementById("jogos");


async function atualizaPlacar() {

    try {

        const url = "https://worldcup26.ir/get/games";

        const response = await fetch(url);

        const dados = await response.json();

        console.log(dados);
        
        jogos.innerHTML = "";


        const hoje = new Date().toISOString().split("T")[0];


        const partidas = dados.games.filter(jogo =>
            jogo.local_date.startsWith(hoje)
        );


        partidas.forEach(element => {


            const jogo = document.createElement("div");
            jogo.classList.add("jogo");


            const horario = document.createElement("div");
            horario.classList.add("horario");

            horario.innerText = element.local_date.split(" ")[1];

            jogo.appendChild(horario);



            const times = document.createElement("div");
            times.classList.add("times");



            const time1 = document.createElement("div");
            time1.classList.add("time");

            time1.innerText = element.home_team;

            times.appendChild(time1);



            const placar = document.createElement("div");
            placar.classList.add("placar");

            placar.innerText =
            `${element.home_score ?? 0} x ${element.away_score ?? 0}`;

            times.appendChild(placar);



            const time2 = document.createElement("div");
            time2.classList.add("time");

            time2.innerText = element.away_team;

            times.appendChild(time2);



            jogo.appendChild(times);



            const status = document.createElement("div");
            status.classList.add("status");

            status.innerText = element.status;

            jogo.appendChild(status);



            jogos.appendChild(jogo);

        });


    } catch(error) {

        console.error("Erro ao buscar dados:", error);

        jogos.innerHTML = `
            <p>Não foi possível carregar os jogos.</p>
        `;
    }


    setTimeout(atualizaPlacar, 30000);

}


atualizaPlacar();