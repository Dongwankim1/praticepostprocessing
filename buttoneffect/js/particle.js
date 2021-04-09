class Particle{
    constructor(x,y,hue){
        this.x = x;
        this.y = y;
        this.w = Math.random()*14;
 
        this.hue=0;
        this.color = 'hsla('+hue+',100%,50%,0.8)';
        this.dir = Math.random() * Math.PI*2;
        this.vel = {x:Math.cos(this.dir),y:Math.sin(this.dir)}
        this.speed = Math.random() * 5;

    }

    render(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.w,0,Math.PI*2);
        ctx.fill();
    
    }

    update(){
         this.x += this.vel.x * this.speed;
         this.y += this.vel.y * this.speed;
    }
}

export default Particle;