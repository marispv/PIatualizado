const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Icpf = document.querySelector(".cpf");
const Itelefone = document.querySelector(".telefone");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");


function cadastrar () {

    fetch("http://localhost:8080/api/criarUsuario",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: Inome.value,
                cpf: Icpf.value,
                telefone: Itelefone.value,
                email: Iemail.value,
                senha: Isenha.value
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) {console.log(res) })    
};

function limpar () {
    Inome.value = "";
    Icpf.value = "";
    Itelefone.value = "";
    Iemail.value = "";
    Isenha.value = "";
};

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    cadastrar();

    limpar();

});

