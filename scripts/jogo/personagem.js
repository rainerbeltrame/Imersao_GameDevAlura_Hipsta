class Personagem extends Animacao {
  constructor (matriz, baseCollisionPolygon, imagem, x, variacaoY,largura, altura, larguraSprite,alturaSprite){
    super(matriz, baseCollisionPolygon, imagem, x,variacaoY, largura, altura, larguraSprite,alturaSprite);
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo= 0;
    this.gravidade = 3;
    this.alturaDoPulo = -30;
    this.pulos = 0;
    this.invencivel = false;
  }
  
  pula() {
    if(this.pulos < 2){
        this.velocidadeDoPulo = this.alturaDoPulo
        this.pulos++
    }
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
  
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;
      
    }
  }
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000)
  }

  estaColidindo(inimigo) {
    if(this.invencivel) {
      return false;
    }
    const myCollisionPolygon = this.baseCollisionPolygon.map(v => createVector(v[0] + this.x, v[1] + this.y))
    const theirCollisionPolygon = inimigo.baseCollisionPolygon.map(v => createVector(v[0] + inimigo.x, v[1] + inimigo.y))

if (window.DEBUG_COLLISION) {
    collideDebug(true)
    noFill()

    stroke(0, 0, 255)
    beginShape()
    myCollisionPolygon.forEach(v => vertex(v.x, v.y))
    endShape(CLOSE);

    stroke(255, 0, 0)
    beginShape()
    theirCollisionPolygon.forEach(v => vertex(v.x, v.y))
    endShape(CLOSE);
}
    const colidiu = collidePolyPoly(myCollisionPolygon, theirCollisionPolygon);
    
    return colidiu;
  }

}