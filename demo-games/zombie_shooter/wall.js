//Wall function, create a random scene
function addwalls(){
                          //first create a chess and randomize wall creation
   for (let x=60; x<30*30; x+=30) {
    for (let y=60; y<30*30; y+=30) {
      createAWall(x, y);
    }
  }
}

function createAWall(x, y){
  let posx = x;
  let posy = y;
  let Rand = random(10);
  if(Rand >= 9){
    let wall = createSprite(posx, posy, 30, 30);
    //wall.shapeColor = color(wallColor);
    wall.addImage(colliderSprite);
    walls.add(wall);
  } else {
  return;
  }
}
