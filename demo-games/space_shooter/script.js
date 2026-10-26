let shipSkin;
let ship;
let sh = 400;

let bullets = [];

async function setup(){
    createCanvas(800, 500);
    imageMode(CENTER);
    rectMode(CENTER);
    noStroke();

    // ship
    shipSkin = await loadImage("assets/ship.png");
    ship = new Ship();


}

function draw(){
    background(73);


    if(bullets.length > 0){
        bullets.forEach((bullet, index) => {
            bullet.updatePos(bullet.y - bullet.speed);
            bullet.display();
            if(bullet.isOutOfBound()){
                bullets.splice(index, 1);
            }
        });
    }

    ship.display();

    

    // debug keys
    // text(`${key} : ${keyCode}`, 50, 50);

    if (keyIsPressed === true) {
        if(key === "ArrowLeft"){
            ship.updatePos(ship.x - ship.speed, ship.y);
        }
        if(key === "ArrowRight"){
            ship.updatePos(ship.x + ship.speed, ship.y);
        }
        
        
    }

    

    
}

function keyPressed(){
    if(key === "Shift"){
            // shoot
            // console.log("new bullet")

            bullets.unshift(new Bullet(ship.x));
        // console.log(bullets)

        }
}
