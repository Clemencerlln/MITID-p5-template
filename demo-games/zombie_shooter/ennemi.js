function addEnnemi() {
  let posx = random(width);
  let posy = height + 10;
  let ennemi = createSprite(posx, posy, 10, 10);
  ennemi.setCollider('circle', 0, 0, 6);
  ennemi.addAnimation('run', 'assets/SpriteZombie-1.png', 'assets/SpriteZombie-2.png');
  //ennemi.debug = true;
  //ennemi.scale = 0.05;
  ennemi.maxSpeed = 2;    
  ennemi.friction = EnnemisSpeed;  //friction of sprite
  ennemis.add(ennemi);
}

function ennemiBehavior() {
  ennemis.collide(walls);          //ennemi collisions
  bullets.overlap(ennemis, function removeEnnemi(bullets, enn) {
                                   //zombie modification
    enn.shapeColor = color(0, random(255), 0);
    enn.width += 2;
    enn.height += 2;
                                   // zombie death
    if(enn.width >= 15){
    enn.remove();
    checkEnnemis();                // check if it was the last zombie on the map
    nbrEnnemisKilled +=1;          // increment zombie text
    weaponMagazine +=1;            // fix bullets disparition
    }
  });

  for (let i = 0; i < ennemis.length; i++) {
                                  //make ennemis follow the player
    ennemis[i].attractionPoint(1, player.position.x, player.position.y); 
                                  // ennemis animation
    ennemis[i].changeAnimation('run');
                                  // if the ennemi is blocked against a wall, make him teleport
    ennemis[i].overlap(walls, function teleport(enn, wall) {
      enn.position.x += random(-3, 3);
      enn.position.y += random(-3, 3);
      
      /*
      overlapingDelay += 1;
      console.log(overlapingDelay);      
                                        //make ennemi move away
    if(overlapingDelay >= 10){
       enn.position.x += 20;
    } 
    */
    });

  }   
}

function lancerManche() {
  for (let i=0; i < nbrEnnemisParManche[mancheId]; i++) {
    addEnnemi();
  }
}

function checkEnnemis() {
  if (ennemis.length <= 0) {
    mancheId++;                    // increment round
    EnnemisSpeed -= 0.02;          // increment ennemis speed for next round
    
    if (mancheId >= nbrEnnemisParManche.length) {
      win = true;                  // if no more round, you win
    } else {
      lancerManche();              // else launch new round
    }
  }
}
