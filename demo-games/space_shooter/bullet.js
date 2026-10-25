class Bullet{
    constructor(posX){
        this.x = posX;
        this.y = sh-ship.size/2;
        this.speed = 1;
        this.size = 5;
        this.color = "#eccaf4";
    }

    updatePos(y){
        this.y = y;
    }

    display(){
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size*2);
    }

    isOutOfBound(){
        return this.y < 0 ? true : false;
    }
}