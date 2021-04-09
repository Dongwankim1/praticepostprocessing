import Title from './title.js';
import Point from './point.js';

class Particle{
    constructor(x,y,hue){
        this.pos = new Point(x,y);
     
        this.size = 10;
        this.weight=Math.random()*5+1;
        this.directionX = -2;
        this.color = 'hsla('+hue+',100%,50%)'
        this.title = new Title();

    }

    update(canvas){
        if(this.pos.y>canvas.height){
            this.pos.y =0-this.size;
            this.weight=Math.random()*5+1;
            this.pos.x = Math.random() * canvas.width;
        } 
        this.weight += 0.05;
        this.pos.y += this.weight;
        this.pos.x += this.directionX;

        if(this.pos.collide(this.title.pos.clone(),this.title.width,this.title.height)){
            this.weight = 0;
        }
    }

    draw(ctx){
        ctx.fillStyle=this.color;
        ctx.beginPath();
        ctx.color
        ctx.arc(this.pos.x,this.pos.y,this.size,0,Math.PI*2);
        ctx.closePath();
        ctx.fill();
        this.title.draw(ctx);
    }
}

export default Particle;