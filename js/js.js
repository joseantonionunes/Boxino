
var botao = document.getElementById("botao");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var botao4 = document.getElementById("botao4");
var botao5 = document.getElementById("botao5");
var botao6 = document.getElementById("botao6");
var botao7 = document.getElementById("botao7");
var botao8 = document.getElementById("botao8");

let timeouts = [];
let pontos = 0;
let teste = false;

let estilo = window.getComputedStyle(botao);
let estilo2 = window.getComputedStyle(botao2);
let estilo3 = window.getComputedStyle(botao3);
let estilo4 = window.getComputedStyle(botao4);
let estilo5 = window.getComputedStyle(botao5);
let estilo6 = window.getComputedStyle(botao6);
let estilo7 = window.getComputedStyle(botao7);
let estilo8 = window.getComputedStyle(botao8);

function Jogar(){

  fase1();

  setTimeout(function() {
    alert("você fez " + pontos + " Pontos, Ir para Fase 2");
    fase2();
  }, 17500)

  setTimeout(function() {
    alert("você fez " + pontos + " Pontos, Ir para Fase 3");
    fase3();
  }, 33000)
  setTimeout(function(){
    alert("você fez " + pontos + " Pontos, Acabou");
  },45000)

}

function fase1(){

  timeouts.push(setTimeout(function() {
    botao.style.animation = "piscaPisca 5s infinite";
  }, 1000));
  timeouts.push(setTimeout(function() {
    botao2.style.animation = "piscaPisca 5s infinite";
    botao.style.animation = "none";
  }, 3000));
  timeouts.push(setTimeout(function() {
    botao3.style.animation = "piscaPisca 5s infinite";
    botao2.style.animation = "none";
  }, 5000));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    botao3.style.animation = "none";
  }, 7000));
  timeouts.push(setTimeout(function() {
    botao5.style.animation = "piscaPisca 5s infinite";
    botao4.style.animation = "none";
  }, 9000));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "piscaPisca 5s infinite";
    botao5.style.animation = "none";
  }, 11000));
  setTimeout(function() {
    botao7.style.animation = "piscaPisca 5s infinite";
    botao6.style.animation = "none";
  }, 13000);
  timeouts.push(setTimeout(function() {
    botao8.style.animation = "piscaPisca 5s infinite";
    botao7.style.animation = "none";
  }, 15000));
  timeouts.push(setTimeout(function() {
    botao8.style.animation = "none";
  }, 17000));
}

function fase2(){

  timeouts.push(setTimeout(function() {
    botao.style.animation = "piscaPisca 5s infinite";
  }, 1000));
  timeouts.push(setTimeout(function() {
    botao2.style.animation = "piscaPisca 5s infinite";
    botao.style.animation = "none";
  }, 2500));
  timeouts.push(setTimeout(function() {
    botao3.style.animation = "piscaPisca 5s infinite";
    botao2.style.animation = "none";
  }, 4000));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    botao3.style.animation = "none";
  }, 5500));
  timeouts.push(setTimeout(function() {
    botao5.style.animation = "piscaPisca 5s infinite";
    botao4.style.animation = "none";
  }, 7000));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "piscaPisca 5s infinite";
    botao5.style.animation = "none";
  }, 8500));
  setTimeout(function() {
    botao7.style.animation = "piscaPisca 5s infinite";
    botao6.style.animation = "none";
  }, 10000);
  timeouts.push(setTimeout(function() {
    botao8.style.animation = "piscaPisca 5s infinite";
    botao7.style.animation = "none";
  }, 11500));
  timeouts.push(setTimeout(function() {
    botao8.style.animation = "none";
    teste = true;
  }, 13000));
}

function fase3(){

  timeouts.push(setTimeout(function() {
    botao.style.animation = "piscaPisca 5s infinite";
  }, 1000));
  timeouts.push(setTimeout(function() {
    botao2.style.animation = "piscaPisca 5s infinite";
    botao.style.animation = "none";
  }, 2000));
  timeouts.push(setTimeout(function() {
    botao3.style.animation = "piscaPisca 5s infinite";
    botao2.style.animation = "none";
  }, 3000));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    botao3.style.animation = "none";
  }, 4000));
  timeouts.push(setTimeout(function() {
    botao5.style.animation = "piscaPisca 5s infinite";
    botao4.style.animation = "none";
  }, 5000));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "piscaPisca 5s infinite";
    botao5.style.animation = "none";
  }, 6000));
  setTimeout(function() {
    botao7.style.animation = "piscaPisca 5s infinite";
    botao6.style.animation = "none";
  }, 7000);
  timeouts.push(setTimeout(function() {
    botao8.style.animation = "piscaPisca 5s infinite";
    botao7.style.animation = "none";
  }, 8000));
  timeouts.push(setTimeout(function() {
    botao8.style.animation = "none";
    teste = true;
  }, 9000));
}

function Parar(){
   // Percorrer o array e cancelar cada timeout
   for (let i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]); 
  }
  
  // Limpar o array após cancelar os timeouts
  timeouts = [];
}


let clicada = false;
let clicada2 = false;

function bonus(imagem){

  if(imagem.id == "botao" && estilo.animationName !== "none"){
    if (clicada !== true) {
        pontos++;
        clicada = true;
    }
    
  }else if(imagem.id == "botao2" && estilo2.animationName !== "none"){
    if (clicada2 !== true) {
      pontos++;
      clicada2 = true;
    }
    clicada = false;
  }
  else if(imagem.id == "botao3" && estilo3.animationName !== "none"){
    if (clicada !== true) {
      pontos++;
      clicada = true;
    }
    clicada2 = false;
  }
  else if(imagem.id == "botao4" && estilo4.animationName !== "none"){
    if (clicada2 !== true) {
      pontos++;
      clicada2 = true;
    }
    clicada = false;
  }
  else if(imagem.id == "botao5" && estilo5.animationName !== "none"){
    if (clicada !== true) {
      pontos++;
      clicada = true;
    }
    clicada2 = false;
  }
  else if(imagem.id == "botao6" && estilo6.animationName !== "none"){
    if (clicada2 !== true) {
      pontos++;
      clicada2 = true;
    }
    clicada = false;
  }
  else if(imagem.id == "botao7" && estilo7.animationName !== "none"){
    if (clicada !== true) {
      pontos++;
      clicada = true;
    }
    clicada2 = false;
  }
  else if(imagem.id == "botao8" && estilo8.animationName !== "none"){
    if (clicada2 !== true) {
      pontos++;
      clicada2 = true;
    }
    clicada = false;
  }
  
  let textos = document.getElementById("texto");
  textos.value = pontos;
}

