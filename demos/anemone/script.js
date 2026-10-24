let w = document.body.clientWidth;
let h = w / 1920 * 1080; //16:9 ratio

let ellipseSize = 25;
let gridX = 20;
let gridY = 20;
let maxDistance = 200;

function setup(){
	createCanvas(w, h);
	stroke('#4e4b63');
	noCursor();
}

function draw(){
	background('#4e4b63');

	for (let x = 0; x <= w; x += gridX) {
		for (let y = 0; y <= h; y += gridY) {
		let random = 0;
		let offsetSize = 0;
		let distance = dist(mouseX, mouseY, x, y);

		fill('#ddbed5');

		if (distance < maxDistance) {
			random = map(distance,maxDistance,0,0,30);
			offsetSize = map(distance, maxDistance, 0, 0, -15);
			fill(map(distance,maxDistance,0,221,0), 190, 213);
		}
		ellipse(x+random, y+random, ellipseSize+offsetSize, ellipseSize+offsetSize);   
		}
	}
}
