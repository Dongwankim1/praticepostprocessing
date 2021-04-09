class App{
    constructor(){
        this.button1 = document.getElementById('button1');
        this.audio1 = new Audio()
        this.audio1.src= './assets/sounde.mp3';
     
        this.audioCtx = new (window.AudioContext||window.webkitAudioContext)();
        console.log(this.audioCtx);
        this.button2 = document.getElementById('button2');

        this.button1.addEventListener('click',this.handlebuttonclick.bind(this),false);
        this.button2.addEventListener('click',this.playSound.bind(this),false);
    }

    handlebuttonclick(e){
        this.audio1.play();
        this.audio1.addEventListener
    }

    playSound(e){
        const oscillator = this.audioCtx.createOscillator();
        oscillator.connect(this.audioCtx.destination);
        oscillator.type='triangle';
        oscillator.start();
        setTimeout(function(){
            oscillator.stop();
        },1000);
    }
}

window.onload = () =>{
    new App();
}