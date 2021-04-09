import Point from './point.js';

class Particle{
    constructor(x,y,directionX,directionY,size,color){
        this.pos = new Point(x,y);
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    
    update(canvaswidth,canvasheight){
        if(this.pos.x+this.size<canvaswidth || this.pos.x-this.size<0){
                this.directionX =- this.directionX;
        }

        if(this.pos.y+this.size>canvasheight || this.pos.y-this.size<0){
            this.directionY=-this.directionY;
        }

        this.pos.x += this.directionX;
        this.pos.y += this.directionY;

    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.pos.x,this.pos.y,this.size,0,Math.PI*2,false);
        ctx.fillStyle=this.color;
        ctx.fill();
    }

}


    export default Particle;