// class to define ship behavior and capacities
class Ship{
    constructor(){
        this.x = width/2;
        this.y = sh;
        this.size = 90;
        this.speed = 10;
    }

    updatePos(x, y){
        this.x = x;
        this.y = y;
    }

    display(){
        image(shipSkin, this.x, this.y, this.size, this.size);
    }
}