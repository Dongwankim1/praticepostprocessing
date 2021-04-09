import Point from './point.js';

class Title{
    constructor(){
        this.titleElem = document.getElementById('title1');
        this.titleMeasure = this.titleElem.getBoundingClientRect();
        this.pos = new Point(this.titleMeasure.left,this.titleMeasure.top);
        this.width = this.titleMeasure.width;
        this.height = 50;
    }


    draw(ctx){
        ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height);
    }
}


export default Title;