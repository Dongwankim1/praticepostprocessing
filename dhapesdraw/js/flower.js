class Flower{
    constructor(){
        this.number = 0;
        this.scale = 10;
        this.size=5;
        this.positionX=1000;
        this.positionY=500;
        this.angle = 0;
        this.radius = 0;
 
    }


    update(){
        //this.size+=0.1;
        this.angle= this.number*1;
        this.radius = this.scale * Math.sqrt(this.number);
        this.positionX+=this.radius * Math.sin(this.angle);
        this.positionY+=this.radius * Math.cos(this.angle);
        
    }
    draw(ctx){


        ctx.fillStyle='red';
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(this.positionX,this.positionY,this.size,0,Math.PI*2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        this.number++;
    }
}


export default Flower;