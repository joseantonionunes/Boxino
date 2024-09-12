// var bgmusix = new Audio();
// bgmusix.src = "../audio/bgm.mp3";
// bgmusix.vol = 0.4;


// function playAudio(){
//   bgmusix.play();
// }

// function pauseAudio(){
//   bgmusix.pause();
// }

// function reiniciarAudio(){
//   bgmusix.currentTime = 0;
//   playAudio();
// }

// // Refere-se a div que tem as imagens dentro
// let raio = document.getElementById("raio");
// let modal = document.getElementById("modal");
// let level = document.getElementById("level");
// let btn = document.getElementById("btn");

// // Refere-se as img de raio 
// var botao = document.getElementById("botao");
// var botao2 = document.getElementById("botao2");
// var botao3 = document.getElementById("botao3");
// var botao4 = document.getElementById("botao4");
// var botao5 = document.getElementById("botao5");
// var botao6 = document.getElementById("botao6");
// var botao7 = document.getElementById("botao7");
// var botao8 = document.getElementById("botao8");

// // Lista que tem os setTimeout
// let timeouts = [];
// let chamarTime = [];
// // Refere-se a o input
// let textos = document.getElementById("texto");
// // variaveis para fazer as gambiarra
// let pontos = 0;
// let cont = 0;
// let para = false;
// let clicada = false;
// let clicada2 = false;

// // Refere-se a os estilos de cada img de raio
// let estilo = window.getComputedStyle(botao);
// let estilo2 = window.getComputedStyle(botao2);
// let estilo3 = window.getComputedStyle(botao3);
// let estilo4 = window.getComputedStyle(botao4);
// let estilo5 = window.getComputedStyle(botao5);
// let estilo6 = window.getComputedStyle(botao6);
// let estilo7 = window.getComputedStyle(botao7);
// let estilo8 = window.getComputedStyle(botao8);

// function Jogar(){
  
//   cont++;
//   validar();
// }

// function chamarFase2(){
  
//   voltarJogo();
//   fase2();
//   btn.onclick = chamarFase3;
// }

// function chamarFase3(){
//   voltarJogo();
//   fase3();
//   btn.onclick = chamarFim;
// }

// function chamarFim(){

//   voltarJogo();
//   pauseAudio();
//   alert("você fez " + pontos + " Pontos, Acabou");
// }

// function reinicarTime(){

//   chamarTime.forEach(function(chamarTime) {
//     clearTimeout(chamarTime);
//   });

//   chamarTime = [];
// }

// function chamarLevel(){
//   raio.style.display = "none";
//   modal.style.display = "none";
//   level.style.display = "block";
// }
// function voltarJogo(){
//   level.style.display = "none";
//   raio.style.display = "block";
//   modal.style.display = "block";
// }

// function reiniciarBonus(){
//   // pontos 
//   textos.value = 0;
//   pontos = 0;
//   // para permitir apenas um click 
//   clicada = false;
//   clicada2 = false;
// }

// function validar(){

//   if(cont == 1){
//     fase1();
//     playAudio();
//   }else {
//     Parar();
//     reiniciarBonus();
//     reinicarTime();

//     setTimeout(function(){
//       fase1();
//       reiniciarAudio();
//     },1000)
    
//   }
// }


// function fase1(){

//   timeouts.push(setTimeout(function() {
//     botao.style.animation = "piscaPisca 5s infinite";
//   }, 1000));
//   timeouts.push(setTimeout(function() {
//     botao2.style.animation = "piscaPisca 5s infinite";
//     botao.style.animation = "none";
//   }, 2500));
//   timeouts.push(setTimeout(function() {
//     botao3.style.animation = "piscaPisca 5s infinite";
//     botao2.style.animation = "none";
//   }, 4000));
//   timeouts.push(setTimeout(function() {
//     botao4.style.animation = "piscaPisca 5s infinite";
//     botao3.style.animation = "none";
//   }, 5500));
//   timeouts.push(setTimeout(function() {
//     botao5.style.animation = "piscaPisca 5s infinite";
//     botao4.style.animation = "none";
//   }, 7000));
//   timeouts.push(setTimeout(function() {
//     botao6.style.animation = "piscaPisca 5s infinite";
//     botao5.style.animation = "none";
//   }, 8500));
//   timeouts.push(setTimeout(function() {
//     botao7.style.animation = "piscaPisca 5s infinite";
//     botao6.style.animation = "none";
//   }, 10000));
//   timeouts.push(setTimeout(function() {
//     botao8.style.animation = "piscaPisca 5s infinite";
//     botao7.style.animation = "none";
//   }, 11500));
//   timeouts.push(setTimeout(function() {
//     botao8.style.animation = "none";
//   }, 13000));
//   timeouts.push(setTimeout(function() {
//     chamarLevel();
//   }, 13500));
  
// }

// function fase2(){

//   timeouts.push(setTimeout(function() {
//     botao3.style.animation = "piscaPisca 5s infinite";
//   }, 1000));
//   timeouts.push(setTimeout(function() {
//     botao6.style.animation = "piscaPisca 5s infinite";
//     botao3.style.animation = "none";
//   }, 2000));
//   timeouts.push(setTimeout(function() {
//     botao.style.animation = "piscaPisca 5s infinite";
//     botao6.style.animation = "none";
//   }, 3000));
//   timeouts.push(setTimeout(function() {
//     botao4.style.animation = "piscaPisca 5s infinite";
//     botao.style.animation = "none";
//   }, 4000));
//   timeouts.push(setTimeout(function() {
//     botao7.style.animation = "piscaPisca 5s infinite";
//     botao4.style.animation = "none";
//   }, 5000));
//   timeouts.push(setTimeout(function() {
//     botao2.style.animation = "piscaPisca 5s infinite";
//     botao7.style.animation = "none";
//   }, 6000));
//   timeouts.push(setTimeout(function() {
//     botao5.style.animation = "piscaPisca 5s infinite";
//     botao2.style.animation = "none";
//   }, 7000));
//   timeouts.push(setTimeout(function() {
//     botao8.style.animation = "piscaPisca 5s infinite";
//     botao5.style.animation = "none";
//   }, 8000));
//   timeouts.push(setTimeout(function() {
//     botao8.style.animation = "none";
//   }, 9000));
//   timeouts.push(setTimeout(function() {
//     chamarLevel();
//   }, 9500));
// }

// function fase3(){

//   timeouts.push(setTimeout(function() {
//     botao4.style.animation = "piscaPisca 5s infinite";
//   }, 1000));
//   timeouts.push(setTimeout(function() {
//     botao8.style.animation = "piscaPisca 5s infinite";
//     botao4.style.animation = "none";
//   }, 1500));
//   timeouts.push(setTimeout(function() {
//     botao3.style.animation = "piscaPisca 5s infinite";
//     botao8.style.animation = "none";
//   }, 2000));
//   timeouts.push(setTimeout(function() {
//     botao6.style.animation = "piscaPisca 5s infinite";
//     botao3.style.animation = "none";
//   }, 2500));
//   timeouts.push(setTimeout(function() {
//     botao5.style.animation = "piscaPisca 5s infinite";
//     botao6.style.animation = "none";
//   }, 3000));
//   timeouts.push(setTimeout(function() {
//     botao.style.animation = "piscaPisca 5s infinite";
//     botao5.style.animation = "none";
//   }, 3500));
//   timeouts.push(setTimeout(function() {
//     botao7.style.animation = "piscaPisca 5s infinite";
//     botao.style.animation = "none";
//   }, 4000));
//   timeouts.push(setTimeout(function() {
//     botao2.style.animation = "piscaPisca 5s infinite";
//     botao7.style.animation = "none";
//   }, 4500));
//   timeouts.push(setTimeout(function() {
//     botao2.style.animation = "none";
//   }, 5000));
//   timeouts.push(setTimeout(function() {
//     chamarLevel();
//   }, 5500));
// }

// function Parar(){

//   pauseAudio();
//    // Percorrer o array e cancelar cada timeout
//    for (let i = 0; i < timeouts.length; i++) {
//     clearTimeout(timeouts[i]); 
//   }

//   // ele tira as cores do raios
//     botao.style.animation = "none";
//     botao2.style.animation = "none";
//     botao3.style.animation = "none";
//     botao4.style.animation = "none";
//     botao5.style.animation = "none";
//     botao6.style.animation = "none";
//     botao7.style.animation = "none";
//     botao8.style.animation = "none";
 
  
//   // Limpar o array após cancelar os timeouts
//   timeouts = [];
// }




// function bonus(imagem){

//   if(imagem.id == "botao" && estilo.animationName != "none"){
//     if (clicada != true) {
//         pontos++;
//         clicada = true;
//     }
    
//   }else if(imagem.id == "botao2" && estilo2.animationName != "none"){
//     if (clicada2 != true) {
//       pontos++;
//       clicada2 = true;
//     }
//     clicada = false;
//   }
//   else if(imagem.id == "botao3" && estilo3.animationName != "none"){
//     if (clicada != true) {
//       pontos++;
//       clicada = true;
//     }
//     clicada2 = false;
//   }
//   else if(imagem.id == "botao4" && estilo4.animationName != "none"){
//     if (clicada2 != true) {
//       pontos++;
//       clicada2 = true;
//     }
//     clicada = false;
//   }
//   else if(imagem.id == "botao5" && estilo5.animationName != "none"){
//     if (clicada != true) {
//       pontos++;
//       clicada = true;
//     }
//     clicada2 = false;
//   }
//   else if(imagem.id == "botao6" && estilo6.animationName != "none"){
//     if (clicada2 != true) {
//       pontos++;
//       clicada2 = true;
//     }
//     clicada = false;
//   }
//   else if(imagem.id == "botao7" && estilo7.animationName != "none"){
//     if (clicada != true) {
//       pontos++;
//       clicada = true;
//     }
//     clicada2 = false;
//   }
//   else if(imagem.id == "botao8" && estilo8.animationName != "none"){
//     if (clicada2 != true) {
//       pontos++;
//       clicada2 = true;
//     }
//     clicada = false;
//   }
  
//   textos.value = pontos;
// }

