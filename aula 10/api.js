/* const cepUsuario = document.getElementById("cep");
const dadosEndereco = document.getElementById("resultado");

const consulta = document.getElementById("btnConsultar");
const limpar = document.getElementById("btnLimpar");


consulta.addEventListener("click", async function () {

    const cep = cepUsuario.value;

    if (cep === "") {
        dadosEndereco.innerHTML = "Digite um CEP.";
        return;
    }


    try {

        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const response = await fetch(url);

        const data = await response.json();


        if(data.erro){
            dadosEndereco.innerHTML = "CEP não encontrado.";
            return;
        }


        dadosEndereco.innerHTML = `
            <p><strong>CEP:</strong> ${data.cep}</p>
            <p><strong>Rua:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.localidade}</p>
            <p><strong>Estado:</strong> ${data.uf}</p>
        `;


    } catch(error){

        dadosEndereco.innerHTML = 
        "Erro ao consultar o CEP.";

    }

});


limpar.addEventListener("click", function(){

    cepUsuario.value = "";

    dadosEndereco.innerHTML = "";

}); */

