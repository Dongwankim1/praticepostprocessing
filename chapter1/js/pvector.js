export class Pvector{
    constructor(x_,y_,z_){
        this.x = x_;
        this.y = y_;
        this.z = z_;
    }


    add(v){
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    mult(n){
        this.x = this.x*n
        this.y = this.y*n;
        return this
    }
    forcediv(force,mass){
        return force/mass
    }
    div(n){
        this.x = this.x/n;
        this.y = this.y/n;
        return this
    }
    normalize(){
        const len = this.mag();
        if (len !==0) this.mult(1/len);
        return this
    }
    limit(max){
        if(this.x>max){
            this.x = max;
        }
        if(this.y>max){
            this.y = max;
        }
    }

    mag(v){
        
        return Math.sqrt((this.x*this.x)+(this.y*this.y))
    }

    static sub(v,g){
        this.x = v.x;
        this.y = v.y;

        this.x -= g.x;
        this.y -= g.y;

        return this
    }
}