class App{
    constructor(){
        this.canvas =document.getElementById('canvas1');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width= window.innerHeight;
        this.canvas.height = window.innerWidth;

        this.animate();
    }

    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.font  = '38px BinggraeSamanco-Bold';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText('배경과 항아리의 조합은 배경이다.',50,50);
    }

    animate(){

        this.draw();
        requestAnimationFrame(this.animate.bind(this))
    }

}



window.onload = () =>{
    new App();
}
