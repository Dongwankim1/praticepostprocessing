import Flower from './flower.js'

class App{
    constructor(){
        this.canvas = document.getElementById('canvas1');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
 

        this.items = [];
        this.items.push(new Flower());
        this.animate();
    }


    animate(){
        //this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        
        for(let i=0;i<this.items.length;i++){
        
            this.items[i].update();
            this.items[i].draw(this.ctx);
        }
        requestAnimationFrame(this.animate.bind(this));

    }
}

window.onload = () =>{
    new App();
}