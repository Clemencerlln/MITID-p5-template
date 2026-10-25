let shipSkin;
let ship;
let sh = 400;

let bullets = [];

async function setup(){
    createCanvas(800, 500);
    imageMode(CENTER);
    noStroke();

    // ship
    shipSkin = await loadImage("assets/ship.png");
    ship = new Ship();


}

function draw(){
    background(73);

    ship.display();

    if(bullets.length > 0){
        bullets.forEach((bullet, index) => {
            // console.log("current bullet");
            // console.log(bullets[index].y);

            bullet.updatePos(bullet.y - bullet.speed);
            bullet.display();

            // bullet.isOutOfBound()

            if(bullet.isOutOfBound()){
                bullets.splice(index, 1);
            }
        });
    }
    

    // debug keys
    // text(`${key} : ${keyCode}`, 50, 50);

    if (keyIsPressed === true) {
        if(key === "ArrowLeft"){
            ship.updatePos(ship.x - ship.speed, ship.y);
        }
        if(key === "ArrowRight"){
            ship.updatePos(ship.x + ship.speed, ship.y);
        }
        if(key === "Shift"){
            // shoot
            // console.log("new bullet")

            bullets.unshift(new Bullet(ship.x));
        // console.log(bullets)

        }
        
    }

    

    
}

// function keyPressed(){
//     if(key === "ArrowLeft"){
//         ship.updatePos(ship.x - ship.speed, ship.y);
//     }
//     if(key === "ArrowRight"){
//         ship.updatePos(ship.x + ship.speed, ship.y);
//     }
// }
