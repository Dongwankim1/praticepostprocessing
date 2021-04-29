class App{
    constructor(){
        this.image = document.querySelector('.testimage');

        this.isDown = false;

        this.image.addEventListener('mousedown',this.mouseDown.bind(this),false);
        this.image.addEventListener('mousemove',this.mouseMove.bind(this),false);
        this.image.addEventListener('mouseup',this.mouseUp.bind(this),{passive: false});
    }


    mouseDown(e){

   

        this.isDown =true;
    }

    mouseMove(e){
        if(this.isDown){
            let x = e.clientX-150;
            let y = e.clientY-150;

            let degeree = Math.atan2(y,x);
            console.log('degree1',x);
            console.log('degree2',y);
            console.log('degree3',degeree);
            this.image.style.transform = `rotate(${degeree*180/Math.PI}deg)`;

        }
        
    }

    mouseUp(e){ 
        this.isDown =false;

    }
}

window.onload = () =>{
    new App();
}