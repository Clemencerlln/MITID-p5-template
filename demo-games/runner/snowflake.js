class SnowFlake{
    constructor(posX, posY, size){
        this.x = posX;
        this.y = posY;
        this.size = size;
    }

    display(){
        fill("#b8cdd8");
        circle(this.x, this.y, this.size);
    }

    isOutOfMap(){
        if(this.y >= 400 + this.size){
            return true;
        }else{
            return false;
        }
    }
}