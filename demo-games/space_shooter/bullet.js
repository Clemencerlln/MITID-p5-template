class Bullet{
    constructor(posX){
        this.x = posX;
        this.y = sh-ship.size/3;
        this.speed = 1;
        this.size = 10;
        this.color = "#faf8fa";
        this.accentColor = "#ecd541";
    }

    updatePos(y){
        this.y = y;
    }

    display(){
        fill(this.color);
        rect(this.x, this.y, this.size, this.size*2, this.size);
        fill(this.accentColor);
        circle(this.x, this.y-this.size/2, this.size-(this.size/2));
    }

    isOutOfBound(){
        return this.y < 0 ? true : false;
    }
}