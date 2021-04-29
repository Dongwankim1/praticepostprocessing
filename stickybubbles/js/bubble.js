import Point from './point.js'

class Bubble{
    constructor(color,ySpeed){
        this.radius = (Math.random() * 150) + 30;
        this.life = true;
        this.pos = new Point();
        this.vy =  ((Math.random()*0.00002)+0.001)+ySpeed;
        this.vr = 0;
        this.vx = (Math.random()*4) -2;
        this.color = color;        
        this.init();
    }
    update(){
        this.vy += 0.00001;
        this.vr += 0.02;
        this.y -= this.vy;
        this.x += this.vx;
        if(this.radius > 1){
            this.radius -= this.vr;
        }
        if(this.radius<=1){
            this.life = false;
        }
    }
    draw(ctx){
        ctx.beginPath();
        //ctx.arc(this.pos.x,this.pos.y,this.radius,0,2*Math.PI);
        ctx.arc(this.pos.x,this.pos.y,this.radius,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    init(){
        this.pos.x = (Math.random()*window.innerWidth);
        this.pos.y = (Math.random()*50)+window.innerHeight-this.radius;
        
    }
}


export default Bubble;