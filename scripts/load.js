function preload(){
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemCenario2 = loadImage('imagens/cenario/nuvem.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemTelaInicial = loadImage('imagens/cenario/telainicial.png');
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    imagemVida = loadImage('imagens/assets/coracao.png');
    fita = loadJSON('fita/fita.json');
    somDoJogo = loadSound('sons/trilha_pink.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
  }