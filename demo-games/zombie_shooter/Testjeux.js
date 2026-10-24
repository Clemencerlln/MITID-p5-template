//GameObjects
let player;
let walls;
let ennemis;

//Weapon 
let playerRotation;  // for bullets direction 
let weapon;          // weapon choice
let bullets;         // how many bullets are in the magazine
let weaponBoxes;     // caisses
let weaponMagazine;  // chargeur 
let intervalBoxSpawn = 5000;

//Sprites
let persoIdle;
let persoSprite;
let persoWalkLeft;
let persoWalkRight;
let persoWalkTop;
let persoWalkBottom;
let ennemiSprite;
let colliderSprite;
let amoBoxSprite;

//Ennemis spawn
let mancheId;        // current round
let nbrEnnemisParManche = [5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];
let EnnemisSpeed;    // ennemis speed
let nbrEnnemisKilled = 0; // handler for ennemis killed during game
let timer = 0;       // handler for game timer 
//let overlapingDelay = 0;

//Game states
let start = true;
let gameOver = false;
let win = false;

//Texts
let backgroundColor = '#D1AF8F';  // colors
let font;
let bulletColor ='#000080';
let textColor = '#ffff80';
let textGameColor = '#ffffff';
let big = 40;                 // font sizes
let small = 20;
let extrabig = 80;


function preload() {
  colliderSprite = loadImage('assets/SpriteDecors.png');
  amoBoxSprite = loadImage('assets/amoBox.png');
  font = loadFont('assets/VT323.ttf');
}


function setup() {
  createCanvas(30*30+50, 30*30+50); 
  
  // instantiate variables 
  weapon = int(random(1,3)); //set weapon
  mancheId = 0;              //set manche id
  nbrEnnemisKilled = 0;      //set killed ennemis counter
  weaponMagazine = 10;       //set number of bullet
  EnnemisSpeed = 0.6;        //set Ennemi speed
  textAlign(CENTER);
  textFont(font);
  fill(textColor);
  
  // instantiate gameobjects
  weaponBoxes = new Group();
  walls = new Group();
  ennemis = new Group();
  bullets = new Group();
  addPerso();
  addwalls();
  lancerManche(); 
}

function draw() {
  background(backgroundColor);
  scenes();
}

function resetGame(){                             
  bullets.removeSprites(); //Remove game components
  walls.removeSprites();
  ennemis.removeSprites();
  weaponBoxes.removeSprites();
  player.remove();
  setup();                 //Recreate all game components
}

  
  
 
