/* ### try to move your mouse on the X axis ### */

// a variable to mess with colors
let c;

function setup() {
    createCanvas(500, 600);
    noStroke();
}

function draw() {
	/* the map() function helps to redefine a range. 
        mouseX is between 0 and the width of the canvas (borders of the canvas on x axis)
        but we want a color value, between 0 and 255.
        see more: https://p5js.org/reference/p5/map/
    */
    c = map(mouseX, 0, width, 0, 255);
	
    background(0, c*2, c);
    
    // shadow 1 of dune in the back
    fill(c/2,100,100);
    beginShape();    
        vertex(90, 148);
        vertex(500,280);
        vertex(500, 600);
        vertex(0, 600);
        vertex(0, 200);
    endShape(CLOSE); 
    
    // shadow 2 of dune in the back    
    fill(c/2,80,80);
    beginShape();    
        vertex(100, 230);
        vertex(500,280);
        vertex(500, 600);
        vertex(0, 600);
        vertex(0, 300);
    endShape(CLOSE);
    
    // sunny part of dune in the back
    fill(c/2,180,180);
    beginShape();    
        splineVertex(500, 350);
        splineVertex(100, 250);
        splineVertex(200, 200);
        vertex(100, 150);
        vertex(500,280);
        vertex(500, 350);
    endShape(CLOSE);
    
    // shadow 1 of dune in the front
    fill(c/2,40,40);
    beginShape();    
        vertex(0, 450);
        vertex(500, 320);
        vertex(500, 600);
        vertex(0, 600);
    endShape(CLOSE);
    
    // shadow 2 of dune in the front
    fill(c/2,30,30);
    beginShape();    
        vertex(0, 500);
        vertex(465, 437);
        vertex(500, 500);
        vertex(500, 600);
        vertex(0, 600);
        vertex(0, 500);
    endShape(CLOSE);


    // sunny part of dune in the front
    fill(c/2,130,130);
    beginShape();    
        splineVertex(0, 550);
        splineVertex(450, 450);
        splineVertex(380, 400);
        vertex(600, 300);
        vertex(0,440);
        vertex(0, 600);
    endShape(CLOSE);
}