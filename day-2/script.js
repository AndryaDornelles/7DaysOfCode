let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let linguagem = document.getElementById("linguagem");
let botao = document.getElementById("btnBVindas");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    let boasVindas = `Olá, ${nome.value}! Seja bem-vindo(a) ao nosso site! Você tem ${idade.value} anos e está estudando ${linguagem.value}.`;
    mensagem.innerHTML = boasVindas;
    let alternativa = document.getElementById("alternativas");
    alternativa.innerHTML = `Você gosta de estudar ${linguagem.value}?`;

    document.getElementById("btn1").removeAttribute("hidden");
    document.getElementById("btn2").removeAttribute("hidden");
});

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function() {
    resposta.innerHTML = "Muito bom! Continue estudando e você terá muito sucesso.";
});

btn2.addEventListener("click", function() {
    resposta.innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?";
});