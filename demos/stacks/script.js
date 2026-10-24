// COMMANDS
let nbC = 20; 	// columns amount
let minH = 5;	// min height for a column
let maxH = 10;	// max height for a column

let columns = [];
let marge = 100;

const w = document.body.clientWidth;
const h = w * 297 / 420;  

// colors are stored in an object
const palette = {
	colors: ["#ecddc5", "#79b27b", "#000000", "#ac6548"],
	stroke: "#ac6548",
	background: "#d5c08e"
}

function setup(){
    createCanvas(w, h);
    background(palette.background);
    noStroke();
    ellipseMode(CENTER);   
    
    for (let i = 0; i < nbC; i++) {
      let c = new column();
      columns.push(c);
    }	 
    
    columns.forEach(function(circle) {
      circle.displayCol();
    });
}

// what a column is and can do is defined in the following class
class column{     
	constructor(){
	this.posX = randInt(marge, w - marge);
	this.posY = randInt(1.5*marge, h - marge);
	this.proportion = random(0.8, 1);
	this.height = randInt(minH, maxH);
	this.color = palette.colors[randInt(palette.colors.length)];
	} 

	displayCol(){
	fill(this.color);
	push();
	translate(this.posX, this.posY);
	let cW = randInt(50, 110);
	for(let i = 0; i < this.height; i++){ 
		scale(this.proportion);
		ellipse(0, -i*10, cW, cW/3);          
	}
	pop();
	}
} 

// a function that return a random integer value between a given range
const randInt = (min, max) => {
	return parseInt(random(min, max));
}