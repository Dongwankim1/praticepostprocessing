import Particle from './particle.js'

const particlesNum = 500;

class App{
    constructor(){
        this.canvas = document.getElementById('canvas1');
        this.ctx = this.canvas.getContext('2d');
        
        this.canvas.width = window.innerWidth;
        this.canvas.height= window.innerHeight;
   

        this.particles = [];
        this.init();
        this.animate();
    }
    init(){
        for(let i =0;i<particlesNum;i++){
            this.particles.push(new Particle(this.canvas.width/2,this.canvas.height/2,i*500));
        }
    }
    update(){
        this.particles.forEach(p =>{
            p.update();
        })
    }

    render(){
        this.particles.forEach(p =>{
            p.render(this.ctx);
        })
    }
    animate(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.update();
        this.render();

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () =>{
    new App();
}