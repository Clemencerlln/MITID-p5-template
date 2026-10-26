let shipSkin;
let ship;
let sh = 400;

let bulletSkin;
let bullets = [];

let enemySkin;
let enemies = [];
let currentRow = 0;

async function setup(){
    createCanvas(800, 500);
    imageMode(CENTER);
    rectMode(CENTER);
    noStroke();
    angleMode(DEGREES);

    // ship
    shipSkin = await loadImage("assets/ship.png");
    ship = new Ship();

    // bullet
    bulletSkin = await loadImage("assets/bullet.png");

    // enemy
    enemySkin = await loadImage("assets/enemy.png");

    spawnARowOfEnemies(8, currentRow);
    currentRow++;
}

function draw(){
    background("#181818");


    if(bullets.length > 0){
        bullets.forEach((bullet, bIndex) => {
            bullet.updatePos(bullet.y - bullet.speed);
            bullet.display();
            if(bullet.isOutOfBound()){
                bullets.splice(bIndex, 1);
            }

            enemies.forEach((enemy, eIndex) => {
                if(enemy.checkCollision(bullet)){
                    enemies.splice(eIndex, 1);
                    bullets.splice(bIndex, 1);
                }
            })
        });
    }

    ship.display();

    enemies.forEach(e=>{
        // change direction if row reach a border
        if(e.x < 0){
            enemies.forEach(e=>{
                e.direction= +1;
                e.y += e.size;
            });
        }else if(e.x > width){
            enemies.forEach(e=>{
                e.direction= -1
                e.y += e.size;
            });
        }

        // move
        if(e.direction === 1){
            e.updatePos(e.x += e.speed, e.y);
        }else{
            e.updatePos(e.x -= e.speed, e.y);
        }
        e.display();
    })

    

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
        bullets.unshift(new Bullet(ship.x));
    }
}


const spawnARowOfEnemies = (amount, idOfTheRow) => {
    const enemySize = 64;
    const sizeOfRow = enemySize * amount;
    const startX = (width - sizeOfRow)/2;
    for(let i = 0; i <= amount; i++){
        enemies.unshift(new Enemy(startX + (i*enemySize), 50, idOfTheRow));
    }
}

const button = document.querySelector("#spawnEnemies");
button.addEventListener("click", ()=>{
    spawnARowOfEnemies(3, currentRow);
    currentRow++;
});
