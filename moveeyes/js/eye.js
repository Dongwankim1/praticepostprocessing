import Point from "./point.js";

class Eye{
    constructor(x,y,radius){
        this.pos = new Point(x,y);
        this.radius = radius;
    }

    draw(ctx,mousePos){
        ctx.beginPath();
        ctx.arc(this.pos.x,this.pos.y,this.radius,0,Math.PI*2,true);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        //get angle
        let dx = mousePos.x - this.pos.x;
        let dy = mousePos.y - this.pos.y;
        let theta = Math.atan2(dy,dx);


        let iris_x = this.pos.x+Math.cos(theta) * this.radius/10;
        let iris_y = this.pos.y+Math.sin(theta)*this.radius/10;
        let irisRadius = this.radius/1.2;
        ctx.beginPath();
        ctx.arc(iris_x,iris_y,irisRadius,0,Math.PI*2,true);
        ctx.fillStyle ="white";
        ctx.fill();
        ctx.closePath();

        //draw pupil
    
        let pupilRadius = this.radius/2.5;
        let pupil_x = this.pos.x+Math.cos(theta)*this.radius/1.9;
        let pupil_y = this.pos.y+Math.sin(theta)*this.radius/1.9;
        ctx.beginPath();
        ctx.arc(pupil_x,pupil_y,pupilRadius,0,Math.PI*2,true);
        ctx.fillStyle ="black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(pupil_x-pupilRadius/3,pupil_y-pupilRadius/3,pupilRadius,0,Math.PI*2,true);
        ctx.fillStyle ="rgba(255,255,255,.1)";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(mousePos.x,mousePos.y,25,0,Math.PI*2,true);
        ctx.fillStyle = "gold";
        ctx.fill();
        ctx.closePath();
        
    }
}
//마우스와 어떤 객체에 각도는 Math.atan2으로 계산한다.

export default Eye;