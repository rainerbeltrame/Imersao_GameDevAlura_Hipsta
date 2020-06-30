function setup() {
  //window.DEBUG_COLLISION = true;   
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  somDoJogo.loop();
  cenas = {
    jogo, telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height /2);
}
function mousePressed(event) {
  if(event = true){
  personagem.pula();
  somDoPulo.play();
  }
}
function keyPressed(){
  jogo.keyPressed(key);  
}
function draw() {
  cenas[cenaAtual].draw();
}



