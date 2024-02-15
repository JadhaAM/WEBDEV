class Background {
    constructor(game){
    this.game=game;
    this.image=document.querySelector("#background");
    this.width=2400;
    this.height=this.game.baseHeight;
    this.x;


    }
    update(){

    }
    draw(){
        this.game.ctx.drawImage(this.image,this.x,0);

    }
}