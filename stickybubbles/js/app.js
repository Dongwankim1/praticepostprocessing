
import Bubble from './bubble.js'

class App{
    constructor(){
        
        //canvas 1
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height=window.innerHeight;

        //canavas2
        this.canvasbg = document.getElementById('canvasbg');
        this.ctxbg = this.canvasbg.getContext('2d');
        this.canvasbg.width = window.innerWidth;
        this.canvasbg.height = window.innerHeight;

        this.Bubbles = [];
        this.bgBubbles = [];
        this.resize();
        this.animate();
        
    }
    resize(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.canvasbg.width = window.innerWidth;
        this.canvasbg.height = window.innerHeight;
    }
    addBubble(){
        this.Bubbles.push(new Bubble('rgb(255,194,194)',1.8));
    }

    addBgBubble(){
        this.bgBubbles.push(new Bubble('rgb(255,255,255)',2.5));
    }

    handleBubbles(){
        for(let i =this.Bubbles.length -1 ;i>=0;i--){
            this.Bubbles[i].update();
            if(!this.Bubbles[i].life){
                this.Bubbles.splice(i,1);
            }
        }
        for(let i= this.bgBubbles.length -1;i>=0;i--){
            this.bgBubbles[i].update();
            if(!this.bgBubbles[i].life){
                this.bgBubbles.splice(i,1);
            }
        }

        if(this.Bubbles.length<(window.innerWidth/4)){
            this.addBubble();
        }

        if(this.bgBubbles.length<(window.innerWidth/12)){
            this.addBgBubble();
        }

    }

    animate(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctxbg.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.handleBubbles();
        for(let i= this.bgBubbles.length-1;i>=0;i--){
            this.bgBubbles[i].draw(this.ctxbg);

        }
        for(let i=this.Bubbles.length-1;i>=0;i--){
            this.Bubbles[i].draw(this.ctx);
        }

        requestAnimationFrame(this.animate.bind(this));
    }
}


window.onload = () =>{
    new App();
}