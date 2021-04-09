import Particle from './particle.js'

class App{
    constructor(){
        this.canvas = document.getElementById('canvas1');
        this.ctx= this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight

        this.particleArray =[];
      
        this.init();
        this.animate();
    }

    init(){
        for(let i=0;i<100;i++){
            let size=Math.random()*20;
            let x = Math.random() * (this.canvas.width);
            let y = Math.random() * (this.canvas.height);
            let directionX = (Math.random()*.4) -.2;
            let directionY = (Math.random()*.4) -.2;
            let color = 'white';

            this.particleArray.push(new Particle(x,y,directionX,directionY,size,color));

        }
    }


    animate(){
        this.ctx.clearRect(0,0,innerWidth,innerHeight);
        for(let i=0;i<this.particleArray.length;i++){
            this.particleArray[i].update(this.canvas.width,this.canvas.height);
            this.particleArray[i].draw(this.ctx);
        }


        requestAnimationFrame(this.animate.bind(this));
    }
}


window.onload = () =>{
    new App();
}