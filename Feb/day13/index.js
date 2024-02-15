



class Game{
    constructor(canvas,context){
        this.canvas=canvas;
        this.ctx=context;
        this.width=this.canvas.width;
        this.height=this.canvas.height;
        this.baseHeight=720;
        this.ratio=this.height/this.baseHeight;
        this.background=new  Background(this);
        this.player = new Player(this);
        this.gravity;

         this.resize(window.innerWidth,window.innerHeight)
        window.addEventListener("resize",e=>{
            console.log(e);
          this.resize(e.currentTarget.innerWidth ,e.currentTarget.innerHeight);
        });

        // control player using mouse

        this.canvas.addEventListener("mousedown",e=>{
            this.player.flap();
        });

        
        // control player using keybord

        window.addEventListener("keydown",e=>{
            console.log(e.key);
            if (e.key===" " || e.key==="Enter") {
                this.player.flap();
            }
          
        });

        // control player using touch

        this.canvas.addEventListener("touchstart",e=>{
           
            this.player.flap();
        });


    }
    resize(width,height){
        this.canvas.width=width;
        this.canvas.height=height;
        this.ctx.fillStyle = "red";
        this.width=this.canvas.width;
        this.height=this.canvas.height;
        this.ratio=this.height/this.baseHeight;
        this.gravity=0.20 * this.ratio;

        this.player.resize();
        
    }

    render(){
        
        this.background.update();
        this.background.draw();
        this.player.update();
        this.player.draw();
    }
}

window.addEventListener("load",function(){

    const canvas=document.querySelector("#contaner");
    const ctx= canvas.getContext('2d');
    canvas.width=720;
    canvas.height=720;
    


 const game  = new Game(canvas,ctx);
 game.render();

 function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    game.render();
    requestAnimationFrame(animate);
 }
   requestAnimationFrame(animate);  
})
