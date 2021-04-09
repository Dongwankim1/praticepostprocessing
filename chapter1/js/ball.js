import {Pvector} from './pvector.js';

const WIDTH = 50;
const HEIGHT = 50;
const topspeed = 10;
export class Ball{
    constructor(canvas){
        this.pos = new Pvector(Math.random()* (10 - 0) + 0,Math.random(100)* (10 - 0) + 0);
        this.velocity = new Pvector(2,2);
        this.acceleration = new Pvector(-0.001,0.01);
        this.canvas = canvas;
        this.mass =5;
    }

    update(mouseX,mouseY){
        
        let mouse = new Pvector(mouseX,mouseY);
        let acceleration = new Pvector.sub(mouse,this.pos);

        acceleration.normalize();
        acceleration.mult(0.2);


        this.velocity.add(acceleration);
        this.velocity.limit(topspeed)
        this.pos.add(this.velocity);
    }
    checkedge(){
        if(this.pos.x>this.canvas.width){
            this.pos.x = 0;
        }else if(this.pos.x<0){
            this.pos.x = this.canvas.width;
        }

        if(this.pos.y>this.canvas.height){
            this.pos.y = 0;
        }else if(this.pos.y<0){
            this.pos.y = this.canvas.height;
        }
    }

    checkvelocity(){
        if((this.pos.x>this.canvas.width)||(this.pos.x<0)){
            this.velocity.x = this.velocity.x * -1;
        }

        if((this.pos.y>this.canvas.height)||(this.pos.y<0)){
            this.velocity.y = this.velocity.y * -1;
        }
    }
    animate(ctx){

        
        ctx.beginPath();
        ctx.fillStyle = "#FFA500";
        
        ctx.arc(this.pos.x,this.pos.y,WIDTH,HEIGHT,  Math.PI,true);
        ctx.fill();
        ctx.stroke();
        //ctx.fillRect(this.pos.x,this.pos.y,WIDTH,HEIGHT);
    }
    repel(ball){
        let force = location.sub
    }
}