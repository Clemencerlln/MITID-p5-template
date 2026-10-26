class Bullet{
    constructor(posX){
        this.x = posX;
        this.y = sh-ship.size/3;
        this.speed = 2;
        this.size = 32;
        this.color = "#faf8fa";
        this.accentColor = "#ecd541";
        this.rotation = 0;
    }

    updatePos(y){
        this.y = y;
        // we update the rotation of the bullet to have a spinning effect
        // range of rotation is between 0 to 360. 
        // so we need to make sure we are below 360. 
        // if above -> rotation go back to 0
        // if not -> increase rotation
        this.rotation >= 360 ? this.rotation=0 : this.rotation += 15;
    }

    display(){
        // have a look at the doc 😉 : https://p5js.org/reference/p5/push/
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        image(bulletSkin, 0, 0, this.size, this.size);
        pop();
    }

    isOutOfBound(){
        return this.y < 0 ? true : false;
    }
}