class Player {
    constructor(game) {
        // Player initialization code
        this.game=game;
        this.x=20;
        this.y;
        this.spritWidth=200;
        this.spritHeight=200;
        this.width;
        this.height;
        this.speedY;
        this.flapSpeed;
    }

    update() {
        // Update player logic

        this.y+=this.speedY;
        if (!this.isBottom()) {
            this.speedY+=this.game.gravity;
        } 

        //  bottom push 
        if (this.isBottom()) {
            this.y=this.game.height-this.height;;
            
        }
    }

    draw() {
        // Draw player logic
        this.game.ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    resize(){
        this.width=this.spritWidth *this.game.ratio;
        this.height=this.spritHeight *this.game.ratio;
        this.y=this.game.height*0.5-this.height-0.5;
        this.speedY=-8 +this.game.ratio;
        this.flapSpeed= 5 + this.game.ratio;
    }

    isTuchingTop(){
        return this.y<=0;
    }

    isBottom(){
        return this.y >=this.game.height-this.height;
    }

    flap(){
        if (!this.isTuchingTop()) {
            
            this.speedY=-this.flapSpeed;
        }
    }
}
