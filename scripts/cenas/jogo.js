class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = fita.mapa;
    }
setup() {
    cenario2 = new Cenario(imagemCenario,3);
    cenario = new Cenario(imagemCenario2, 3);  
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);  
    personagem = new Personagem(matrizPersonagem, baseCollisionPolygonPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, baseCollisionPolygonInimigo, imagemInimigo, width, 30, 52, 52, 104, 104, 10);  
    const inimigoGrande = new Inimigo(matrizInimigoGrande, baseCollisionPolygonInimigoGrande,  imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);  
    const inimigoVoador = new Inimigo(matrizInimigoVoador, baseCollisionPolygonInimigoVoador, imagemInimigoVoador, width, 300, 100, 75, 200, 150, 10);  
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    }

    keyPressed(key) {
        if(key==='ArrowUp'){
            personagem.pula();
            somDoPulo.play();
        }   
    }
    draw(){
        cenario.exibe();
        cenario2.exibe();
        cenario2.move();
        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionarPonto();
        personagem.exibe();
        personagem.aplicaGravidade();
        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move()

        if(inimigoVisivel){
        this.indice++;
        inimigo.aparece();
            if(this.indice > this.mapa.length - 1){
            this.indice = 0;
            }        
        }

        if (personagem.estaColidindo(inimigo)) {
        vida.perdeVida();
        personagem.tornarInvencivel();
        if(vida.vidas === 0) {
            image(imagemGameOver, width/2 - 200,height/2);
            vida.perdeVida();            
            somDoJogo.stop();
            noLoop();  
        }
          
        }
    }
}