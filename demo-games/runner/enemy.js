class Enemy{
    constructor(speed, posY = 380){
        this.x = width;
        this.w = 50;
        this.h = 50;
        this.y = posY
        this.speed = speed;
    }

    display(){
        fill("rgb(152, 220, 43)")
        rect(this.x, this.y, this.w, this.h);
    }

    checkCollision(p, debug = false){
        const of = 5; // offset to reduce player hitbox
        const pHalf = p.size / 2 - of; //half player width (utility)      

        // we check overlap 
        const hit =
            abs(p.position.x - this.x) < pHalf + this.w / 2 &&
            abs(p.position.y - this.y) < pHalf + this.h / 2;

        // a way to display the hitboxes
        if(debug == true){
            noFill();
            stroke(hit ? "#F00" : "#0F0");
            rect(p.position.x, p.position.y, pHalf*2);
            rect(this.x, this.y, this.w, this.h);
            noStroke(); 
        }

        return hit;        
    }

    // if enemy leave the screen
    isOutOfMap(){
        // if(this.x < 0 - this.w){
        //     return true;
        // }else{
        //     return false;
        // }

        // one line way of doing a if (named a ternary operator)
        return this.x < 0 - this.w ? true : false;
    }
}