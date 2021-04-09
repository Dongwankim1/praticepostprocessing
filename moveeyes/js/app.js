import Eye from './eye.js';
import Point from './point.js'

class App{
    constructor(){
        this.canvas = document.getElementById('canvas1');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        this.mousePos = new Point();

        this.eyes = [];
        this.init();
        this.animate();
        window.addEventListener("mousemove",this.handleMouseMove.bind(this),false);
    }


    init(){
        this.eyes = [];
        let overlapping = false;
        let numberOfeyes =200;
        let protection =10000;
        let counter = 0;

        while(this.eyes.length<numberOfeyes && counter<protection){
            let eye ={
                x:Math.random()*this.canvas.width,
                y:Math.random()*this.canvas.height,
                radius:Math.floor(Math.random()*100)+5
            }
            overlapping = false;
            for(let i=0;i<this.eyes.length;i++){
                let previousEye = this.eyes[i];
                let dx= eye.x - previousEye.pos.x ;
                let dy = eye.y - previousEye.pos.y ;
                let distance = Math.sqrt(dx*dx+dy*dy);
                if(distance <(eye.radius+previousEye.radius)){
                    overlapping=true;
                    break;
                }

            }

            if(!overlapping){
                this.eyes.push(new Eye(eye.x,eye.y,eye.radius));

            }

            counter++;
        }
        

    }

    handleMouseMove(e){
        this.mousePos.x = e.x;
        this.mousePos.y = e.y;
    }


    animate(){
        requestAnimationFrame(this.animate.bind(this));
        this.ctx.fillStyle = "rgba(0,0,0,.25";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);

        for(let i =0;i<this.eyes.length;i++){
            this.eyes[i].draw(this.ctx,this.mousePos)
        }
    }
}


window.onload = () =>{
    new App();
}