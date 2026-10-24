//Add a weapon box
function addBoxes(){
//let newBox = createSprite(width/2 + random(- 0, - 20), height/2 + random(20, - 20),  20, 20); 
    let newBox = createSprite(random(50, width-100), random(50, height-100),  20, 20); 
    newBox.setCollider('rectangle', 0, 0, 30, 30);
    newBox.addImage(amoBoxSprite);
    newBox.shapeColor = color(0, 150, 0);
    weaponBoxes.add(newBox); 
}

//everything link to weapon
function weaponBehavior(){
//colliders
bullets.collide(walls);
//weapon boxes
player.overlap(weaponBoxes, function weaponChoice(player, box){
  weapon = int(random(1, 3));  
  box.remove();
  weaponMagazine += 5;
});
//spawn boxes
timer ++; 
 if(timer > 500){    
 addBoxes();
 timer = 0;
}
  
  if(weaponBoxes.length > 4){  
   weaponBoxes[0].remove();
  }

//magazine weapon
fill(textGameColor);
textSize(20);
text("Remain bullets : " + weaponMagazine, 100, 40); 
//check if you got bullet 
if(weaponMagazine <= 0){
  fill(textGameColor);
  textSize(extrabig);
  text("Empty magazine \n get amo box !", width/2, height/2 - 100); 
  return;
} else {
  //Shooting
  if(keyWentDown('X')){  
    if(weapon == 1){
      let bullet = createSprite(player.position.x, player.position.y, 5, 5);
      //bullet.addImage(persoSprite);
      bullet.shapeColor = color(bulletColor);
      bullet.setSpeed(10, playerRotation); 
      bullet.life = 30; //nbr de frame où la balle reste
      bullets.add(bullet);
    } else if(weapon == 2){
       for(let i= -20; i<30; i+=10){
        let bullet = createSprite(player.position.x, player.position.y, 5, 5);
        bullet.shapeColor = color(bulletColor);
        bullet.setSpeed(10, playerRotation + i);
        bullet.life = 10;
        bullets.add(bullet);
      }    
    }
    weaponMagazine --;
  }
}
}
