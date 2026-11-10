let tela = document.querySelector("#tela-de-pintura");
let corAzul = document.querySelector("#pincel-azul");
let corVermelha = document.querySelector("#pincel-vermelho");
let corAmarelo = document.querySelector("#pincel-amarelo");
let corVerde = document.querySelector("#pincel-verde");
let corRoxo = document.querySelector("#pincel-roxo");
let corRosa = document.querySelector("#pincel-rosa");
let corMarrom = document.querySelector("#pincel-marrom");
let corPreto = document.querySelector("#pincel-preto");
let corLaranja = document.querySelector("#pincel-laranja");

corAzul.addEventListener("click", azul);
corVermelha.addEventListener("click", vermelho);
corAmarelo.addEventListener("click", amarelo);
corVerde.addEventListener("click", verde);
corRoxo.addEventListener("click", roxo);
corRosa.addEventListener("click", rosa);
corMarrom.addEventListener("click", marrom);
corPreto.addEventListener("click", preto);
corLaranja.addEventListener("click", laranja);
let nomeCor = document.querySelector("h3")

function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul";
}

function vermelho(){
    tela.style.background = "rgb(240, 8, 8)";
    nomeCor.innerHTML = "Vermelho";
}

function amarelo(){
    tela.style.background = "gold";
    nomeCor.innerHTML = "Amarelo";
}

function verde(){
    tela.style.background = "green";
    nomeCor.innerHTML = "Verde";
}

function roxo(){
    tela.style.background = "purple";
    nomeCor.innerHTML = "Roxo";
}

function rosa(){
    tela.style.background = "pink";
    nomeCor.innerHTML = "Rosa";
}

function marrom(){
    tela.style.background = "rgb(105, 43, 6)";
    nomeCor.innerHTML = "Marrom";
}

function preto(){
    tela.style.background = "black";
    nomeCor.innerHTML = "Preto";
}

function laranja(){
    tela.style.background = "rgb(228, 89, 3)";
    nomeCor.innerHTML = "Laranja";
}