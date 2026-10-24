let snowSpeed = 2;
let snowFlakes = [];

let player;
let gravity;

let enemies = [];
let nextSpawn = 0;

function setup(){
    createCanvas(800, 500);
    rectMode(CENTER);    
    noStroke();

    player = new Player(0.8, 200, 100);
    gravity = createVector(0, 0.3 * player.mass);
}

function draw(){
    // environement background and plateform
    background("#c3e3f0");
    fill("#fbf6f6");
    rect(width/2, height-50, width, 100);

    // apply gravity 
    player.applyForce(gravity);
    // update player position
    player.update();
    // then display player
    player.display();
    // make sure he does go below the plateform
    player.checkEdges(420);

    // go through all snowFlakes
    snowFlakes.forEach((snowFlake, index) => {
        // update position for each snowFlake
        snowFlake.x = snowFlake.x - (snowSpeed/2);
        snowFlake.y = snowFlake.y + snowSpeed;
        // display with new position
        snowFlake.display();
        // check if is still in screen
        if(snowFlake.isOutOfMap() === true){            
            snowFlakes.splice(index, 1);
        }
    });

    // enemies spawn 
    if (frameCount >= nextSpawn) {
        // we randomize the enemy speed
        const enemySpeed = random(3, 6);
        // we randomize the y position of the enemy
        const enemyIsFlying = random(5)>=3 ? 380 : 300;
        // then we create enemy
        enemies.push(new Enemy(enemySpeed, enemyIsFlying));
        scheduleSpawn();
    }

    // update enemies
    enemies.forEach((enemy, index)=>{
        enemy.x = enemy.x - enemy.speed;
        enemy.display();        
        if(enemy.checkCollision(player, false)){
            console.log(`enemy ${index} collision avec joueur`);
            noLoop(); // the draw function stop looping
            
             // then display end screen
            fill(0);
            rect(width/2, height/2, width, height);
            fill("#d3be02");
            textSize(30);
            textAlign(CENTER);
            text("you've lost", width/2, height/2-50);
            text('refresh page to restart the game', width/2, height/2);
        }
        if(enemy.isOutOfMap() === true){
            enemies.splice(index, 1);
        }
    });
}

function keyPressed() {
  if (key === 'a' && player.onGround) {
    player.applyForce(createVector(0, -8));
  }
}

// snow spawn
setInterval(function(){
    snowFlakes.unshift(new SnowFlake(random(100, width+50), -20, random(5, 20)))
}, 500);

function scheduleSpawn() {
  nextSpawn = frameCount + floor(random(60, 180));
}