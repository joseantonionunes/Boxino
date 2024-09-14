var bgmusix = new Audio();
bgmusix.src = "../audio/bgm.mp3";
bgmusix.vol = 0.4;


function playAudio(){
  bgmusix.play();
}

function pauseAudio(){
  bgmusix.pause();
}

function reiniciarAudio(){
  bgmusix.currentTime = 0;
  playAudio();
}

// Refere-se as img de raio 
var botao = document.getElementById("botao");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var botao4 = document.getElementById("botao4");
var botao5 = document.getElementById("botao5");
var botao6 = document.getElementById("botao6");
var botao7 = document.getElementById("botao7");
var botao8 = document.getElementById("botao8");

// Lista que tem os setTimeout
let timeouts = [];
// Refere-se a o input
let txtfase = document.getElementById("txtfase");
let txtfase2 = document.getElementById("txtfase2");
// variaveis para fazer as gambiarra
let pontos = 0;
let cont = 0;
// let para = false;
let clicada = false;
let clicada2 = false;

// Refere-se a os estilos de cada img de raio
let estilo = window.getComputedStyle(botao);
let estilo2 = window.getComputedStyle(botao2);
let estilo3 = window.getComputedStyle(botao3);
let estilo4 = window.getComputedStyle(botao4);
let estilo5 = window.getComputedStyle(botao5);
let estilo6 = window.getComputedStyle(botao6);
let estilo7 = window.getComputedStyle(botao7);
let estilo8 = window.getComputedStyle(botao8);

function Jogar(){
  cont++;
  validar();
  txtfase.value = "Começar";
  txtfase.style.animation = "textocolorido 5s infinite";
  txtfase2.value = "";
  txtfase2.style.animation = "none";
}

function enviarPontos(pontos) {
  fetch('/add-user', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pontos: pontos })
  })
  .then(response => response.json())
  .then(data => {
      console.log('Pontos enviados com sucesso:', data);
  })
  .catch((error) => {
      console.error('Erro ao enviar os pontos:', error);
  });
}

function chamarFase2(){ 
  fase2();
}

function chamarFase3(){
  fase3();
}

function chamarFim(){
  pauseAudio();
  enviarPontos(pontos);
  window.location.href = '../public/index.html';
}

function reiniciarBonus(){
  // pontos 
  pontos = 0;
  // para permitir apenas um click 
  clicada = false;
  clicada2 = false;
}

function validar(){

  if(cont == 1){
    
    setTimeout(function(){
      fase1();
      playAudio();
    },1000)
    
  }else {
    Parar();
    reiniciarBonus();

    setTimeout(function(){
      fase1();
      reiniciarAudio();
    },1000)
    
  }
}


function fase1(){

  timeouts.push(setTimeout(function() {
    botao3.style.animation = "piscaPisca 5s infinite";
    txtfase.value = "";
    txtfase.style.animation = "none";
  }, 1000));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "piscaPisca 5s infinite";
    botao3.style.animation = "none";
  }, 2000));
  timeouts.push(setTimeout(function() {
    botao.style.animation = "piscaPisca 5s infinite";
    botao6.style.animation = "none";
  }, 3000));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    botao.style.animation = "none";
  }, 4000));
  timeouts.push(setTimeout(function() {
    botao7.style.animation = "piscaPisca 5s infinite";
    botao4.style.animation = "none";
  }, 5000));
  timeouts.push(setTimeout(function() {
    botao2.style.animation = "piscaPisca 5s infinite";
    botao7.style.animation = "none";
  }, 6000));
  timeouts.push(setTimeout(function() {
    botao5.style.animation = "piscaPisca 5s infinite";
    botao2.style.animation = "none";
  }, 7000));
  timeouts.push(setTimeout(function() {
    botao8.style.animation = "piscaPisca 5s infinite";
    botao5.style.animation = "none";
  }, 8000));
  timeouts.push(setTimeout(function() {
    botao3.style.animation = "piscaPisca 5s infinite";
    botao8.style.animation = "none";
  }, 9000));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    botao3.style.animation = "none";
  }, 10000));
  timeouts.push(setTimeout(function() {
    botao7.style.animation = "piscaPisca 5s infinite";
    botao4.style.animation = "none";
  }, 11000));
  timeouts.push(setTimeout(function() {
    botao.style.animation = "piscaPisca 5s infinite";
    botao7.style.animation = "none";
  }, 12000));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "piscaPisca 5s infinite";
    botao.style.animation = "none";
  }, 13000));
  timeouts.push(setTimeout(function() {
    botao2.style.animation = "piscaPisca 5s infinite";
    botao6.style.animation = "none";
  }, 14000));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    botao2.style.animation = "none";
  }, 15000));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "none";
  }, 16000));

  timeouts.push(setTimeout(function() {
    txtfase.value = "Proxima fase";
    txtfase.style.animation = "textocolorido 5s infinite";
  }, 16500));
  timeouts.push(setTimeout(function() {
    chamarFase2();
  }, 17500));
  
}

function fase2(){

  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    txtfase.value = "";
    txtfase.style.animation = "none";
  }, 800));
  timeouts.push(setTimeout(function() {
    botao8.style.animation = "piscaPisca 5s infinite";
    botao4.style.animation = "none";
  }, 1600));
  timeouts.push(setTimeout(function() {
    botao3.style.animation = "piscaPisca 5s infinite";
    botao8.style.animation = "none";
  }, 2400));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "piscaPisca 5s infinite";
    botao3.style.animation = "none";
  }, 3200));
  timeouts.push(setTimeout(function() {
    botao5.style.animation = "piscaPisca 5s infinite";
    botao6.style.animation = "none";
  }, 4000));
  timeouts.push(setTimeout(function() {
    botao.style.animation = "piscaPisca 5s infinite";
    botao5.style.animation = "none";
  }, 4800));
  timeouts.push(setTimeout(function() {
    botao7.style.animation = "piscaPisca 5s infinite";
    botao.style.animation = "none";
  }, 5600));
  timeouts.push(setTimeout(function() {
    botao2.style.animation = "piscaPisca 5s infinite";
    botao7.style.animation = "none";
  }, 6400));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "piscaPisca 5s infinite";
    botao2.style.animation = "none";
  }, 7200));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    botao6.style.animation = "none";
  }, 8000));
  timeouts.push(setTimeout(function() {
    botao3.style.animation = "piscaPisca 5s infinite";
    botao4.style.animation = "none";
  }, 8800));
  timeouts.push(setTimeout(function() {
    botao.style.animation = "piscaPisca 5s infinite";
    botao3.style.animation = "none";
  }, 9600));
  timeouts.push(setTimeout(function() {
    botao2.style.animation = "piscaPisca 5s infinite";
    botao.style.animation = "none";
  }, 10400));
  timeouts.push(setTimeout(function() {
    botao8.style.animation = "piscaPisca 5s infinite";
    botao2.style.animation = "none";
  }, 11200));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    botao8.style.animation = "none";
  }, 12000));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "none";
  }, 12800));

  timeouts.push(setTimeout(function() {
    txtfase.value = "Ultima fase";
    txtfase.style.animation = "textocolorido 5s infinite";
  }, 13200));
  timeouts.push(setTimeout(function() {
    chamarFase3();
  }, 14000));
}

function fase3(){

  timeouts.push(setTimeout(function() {
    botao.style.animation = "piscaPisca 5s infinite";
    txtfase.style.animation = "none";
    txtfase.value = "";
  }, 500));
  timeouts.push(setTimeout(function() {
    botao2.style.animation = "piscaPisca 5s infinite";
    botao.style.animation = "none";
  }, 1000));
  timeouts.push(setTimeout(function() {
    botao3.style.animation = "piscaPisca 5s infinite";
    botao2.style.animation = "none";
  }, 1500));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    botao3.style.animation = "none";
  }, 2000));
  timeouts.push(setTimeout(function() {
    botao5.style.animation = "piscaPisca 5s infinite";
    botao4.style.animation = "none";
  }, 2500));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "piscaPisca 5s infinite";
    botao5.style.animation = "none";
  }, 3000));
  timeouts.push(setTimeout(function() {
    botao7.style.animation = "piscaPisca 5s infinite";
    botao6.style.animation = "none";
  }, 3500));
  timeouts.push(setTimeout(function() {
    botao8.style.animation = "piscaPisca 5s infinite";
    botao7.style.animation = "none";
  }, 4000));
  timeouts.push(setTimeout(function() {
    botao5.style.animation = "piscaPisca 5s infinite";
    botao8.style.animation = "none";
  }, 4500));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "piscaPisca 5s infinite";
    botao5.style.animation = "none";
  }, 5000));
  timeouts.push(setTimeout(function() {
    botao3.style.animation = "piscaPisca 5s infinite";
    botao6.style.animation = "none";
  }, 5500));
  timeouts.push(setTimeout(function() {
    botao2.style.animation = "piscaPisca 5s infinite";
    botao3.style.animation = "none";
  }, 6000));
  timeouts.push(setTimeout(function() {
    botao4.style.animation = "piscaPisca 5s infinite";
    botao2.style.animation = "none";
  }, 6500));
  timeouts.push(setTimeout(function() {
    botao7.style.animation = "piscaPisca 5s infinite";
    botao4.style.animation = "none";
  }, 7000));
  timeouts.push(setTimeout(function() {
    botao.style.animation = "piscaPisca 5s infinite";
    botao7.style.animation = "none";
  }, 7500));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "piscaPisca 5s infinite";
    botao.style.animation = "none";
  }, 8000));
  timeouts.push(setTimeout(function() {
    botao6.style.animation = "none";
  }, 8500));

  timeouts.push(setTimeout(function() {
    chamarFim();
    
  }, 9000));
}

function Parar(){

  pauseAudio();
   // Percorrer o array e cancelar cada timeout
   for (let i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]); 
  }

  // ele tira as cores do raios
    botao.style.animation = "none";
    botao2.style.animation = "none";
    botao3.style.animation = "none";
    botao4.style.animation = "none";
    botao5.style.animation = "none";
    botao6.style.animation = "none";
    botao7.style.animation = "none";
    botao8.style.animation = "none";

    // apagar os textos 
    txtfase.value = "";
    txtfase.style.animation = "none";
    txtfase2.value = "";
    txtfase2.style.animation = "none";
 
  
  // Limpar o array após cancelar os timeouts
  timeouts = [];
}




function bonus(imagem){

  if(imagem.id == "botao" && estilo.animationName != "none"){
    if (clicada != true) {
        pontos++;
        clicada = true;
    }
    
  }else if(imagem.id == "botao2" && estilo2.animationName != "none"){
    if (clicada2 != true) {
      pontos++;
      clicada2 = true;
    }
    clicada = false;
  }
  else if(imagem.id == "botao3" && estilo3.animationName != "none"){
    if (clicada != true) {
      pontos++;
      clicada = true;
    }
    clicada2 = false;
  }
  else if(imagem.id == "botao4" && estilo4.animationName != "none"){
    if (clicada2 != true) {
      pontos++;
      clicada2 = true;
    }
    clicada = false;
  }
  else if(imagem.id == "botao5" && estilo5.animationName != "none"){
    if (clicada != true) {
      pontos++;
      clicada = true;
    }
    clicada2 = false;
  }
  else if(imagem.id == "botao6" && estilo6.animationName != "none"){
    if (clicada2 != true) {
      pontos++;
      clicada2 = true;
    }
    clicada = false;
  }
  else if(imagem.id == "botao7" && estilo7.animationName != "none"){
    if (clicada != true) {
      pontos++;
      clicada = true;
    }
    clicada2 = false;
  }
  else if(imagem.id == "botao8" && estilo8.animationName != "none"){
    if (clicada2 != true) {
      pontos++;
      clicada2 = true;
    }
    clicada = false;
  }
}

