import Particle from './particle.js'


const particlesNum = 400;

class App{
    constructor(){
        this.canvas = document.getElementById('canvas1');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.particlesArray=[];
        
        this.particleinit();
        this.animate();
    }

    particleinit(){
        for(let i=0;i<particlesNum;i++){
            const x = Math.random()*this.canvas.width;
            const y = Math.random()*this.canvas.height;
            this.particlesArray.push(new Particle(x,y,i*400))
        }
    }

    animate(){
        this.ctx.fillStyle='rgba(255,255,255,0.05)';
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        for(let i=0;i<this.particlesArray.length;i++){
            this.particlesArray[i].update(this.canvas);
            this.particlesArray[i].draw(this.ctx);
        }
        
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload=  () =>{
    new App();
}
