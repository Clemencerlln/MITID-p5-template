function addPerso(){
  player = createSprite(width/2, height/2, 5, 5); 
  player.setCollider('circle', 0, 0, 10);
  //player.debug = true;
  //player.shapeColor = color(0,0,0,0);
  player.addAnimation('idle', 'assets/SpritePlayer-1.png', 'assets/SpritePlayer-1.png');
  player.addAnimation('walkLeft', 'assets/SpritePlayer-8.png', 'assets/SpritePlayer-9.png');
  player.addAnimation('walkRight', 'assets/SpritePlayer-11.png', 'assets/SpritePlayer-12.png');
  player.addAnimation('walkTop', 'assets/SpritePlayer-5.png', 'assets/SpritePlayer-6.png');
  player.addAnimation('walkBottom', 'assets/SpritePlayer-2.png', 'assets/SpritePlayer-3.png');
}

function persoBehavior(){
                            // player collides with walls
    player.collide(walls);
                              //map border (teleportation)
   if(player.position.x <= 0){
     player.position.x = width - 20;
   } else if(player.position.x >= width){
     player.position.x = 20;
   }
   
   if(player.position.y <= 0){
     player.position.y = height - 20;
   } else if(player.position.y >= height){
     player.position.y = 20;
   }
      
                            // player moves
    if(keyDown(LEFT_ARROW)){
    playerRotation = 180; 
    player.mirrorX(1);
    player.changeAnimation('walkLeft');
    player.position.x -= 1;
    }
    else if(keyDown(RIGHT_ARROW)){
    playerRotation = 0;
    player.changeAnimation('walkRight');
    player.position.x += 1;
    }
    else if(keyDown(DOWN_ARROW)){
    playerRotation = 90;
    player.changeAnimation('walkBottom');
    player.position.y += 1;
    }
    else if(keyDown(UP_ARROW)){
    playerRotation = 270;
    player.changeAnimation('walkTop');
    player.position.y -= 1;
    }else{
    player.changeAnimation('idle');
    }
    
                            // Player death
   player.overlap(ennemis, function hitEnnemis(player, enn){
  gameOver = true;
  });
}
