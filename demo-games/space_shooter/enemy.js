class Enemy{
    constructor(posX, posY, row){
        this.x = posX;
        this.y = posY;
        this.row = row; // to move some rows
        this.direction = 1;
        this.speed = 1;
        this.size = 64; // size in pixels of the image
    }

    updatePos(x, y){
        this.x = x;
        this.y = y;
    }

    display(){
        image(enemySkin, this.x, this.y, this.size, this.size);
    }

    checkCollision(entity){
        const of = 10; // offset to reduce hitbox
        const bHalf = this.size / 2 - of; // bullet half      

        // we check overlap 
        const hit =
            abs(entity.x - this.x) < entity.size + bHalf &&
            abs(entity.y - this.y) < entity.size + bHalf;

        return hit;        
    }

}