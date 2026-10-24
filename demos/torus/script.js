let rot = true;

function setup() {
  createCanvas(500, 500, WEBGL);
	
	//rotateY(radians(79));
}

function draw() {
  	background(51);
	
		//couleurs
		fill("#000080");
		stroke(255);
		strokeWeight(5);
	
	
	
	
		//rotation et torus
		translate(0, 300);
		rotateY(radians(90));	
		rotateZ(-frameCount * 0.01);
		torus(450, 400, 20, 15);
		
}