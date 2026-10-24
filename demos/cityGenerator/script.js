/* COMMANDS */
let posY = 400;      //change horizon 
let unitSize = 35;   //width of building face
let margin = 40;     //margin from canvas border
let nbBuilding = 35; //number of build to create 
let maxHeight = 5;   //maw height of building
let getStroke = true;//stroke or not
// Colors:   FACE A       FACE B    FACE B ROOF   DETAILS        SKY        GROUND   
let co = ["#FCDDB0", "#FF9F9F", "#E97777", "#5F5F5F", "#A3C7D6", "#90A17D"];

/* END OF COMMANDS */
let buildings = [];

function setup() {
	buildings = [];
	createCanvas(600, 5 * (posY / 4));
	noStroke();
	background(co[4]);
	fill(co[5]);
	rect(0, posY, width, height - posY);
	if (getStroke) {
		strokeWeight(unitSize / 15);
	} else {
		strokeWeight(0);
	}

	for (let i = 0; i < nbBuilding; i++) {
		let pos = ceil(random(margin, width - ((unitSize * 3) +  margin)));
		let floors = ceil(random(0, maxHeight));
		let buildingWidth = ceil(random(0, 2));

		buildings.push(new Building(pos, floors, buildingWidth));
	}

	for (let build in buildings) {
		buildings[build].generate();
	}

	button = createButton('Generate');
	button.position(0, height + 30);
	button.mousePressed(setup);
  
    button2 = createButton('save city');
	button2.position(100 , height + 30);
	button2.mousePressed(saveImage);
}

/* house generator

  face schema        ________
                    / \      \
                   /   \      \
                  /     \      \
     nbFloor:     | A   |   B  |
     how many     |     |      |
     stages       |     |      |
                  |_____|______|
                  ^          ^
                  |          |___ faceBWidth: width of the size
               startX          

*/

class Building {

	constructor(startX = int(random(0, width - 10)), nbFloor = 3, faceBWidth = 1) {
		this.startX = startX;
		this.nbFloor = nbFloor;
		this.faceBWidth = faceBWidth;

	}

	generate() {
		/* For loop used to draw floor by floor */
		for (let i = 1; i <= this.nbFloor; i++) {
			/* Math stored in general purpose variables */
			let faceAOverlayY = posY - (unitSize * (i - 1));
			let faceBstartX = this.startX + unitSize;

			/* decide if must draw standard floor or roof and floor */
			if (i !== this.nbFloor) {
				drawFaceAStage(this.startX, faceAOverlayY);
				drawFaceBStage(faceBstartX, faceAOverlayY, this.faceBWidth);
			} else {
				drawFaceAStage(this.startX, faceAOverlayY, true);
				drawFaceBStage(faceBstartX, faceAOverlayY, this.faceBWidth, true);
			}

		}

		// drawing function zone

		function drawFaceAStage(posX, posY, isLast = false) {
			fill(co[0]);
			rect(posX, posY, unitSize, -unitSize);
			stroke(co[3]),
				line(posX, posY, posX, posY - unitSize);
			noStroke();
			window(posX, posY);

			if (isLast) {
				//draw triangle shape for roof
				fill(co[0]);
				let YOverlay = posY - unitSize;
				let halfUnitSize = unitSize / 2;
				beginShape();
				vertex(posX, YOverlay);
				vertex(posX + halfUnitSize, YOverlay - halfUnitSize);
				vertex(posX + unitSize, YOverlay);
				endShape(CLOSE);
				stroke(co[3]),
					line(posX, YOverlay, posX + halfUnitSize, YOverlay - halfUnitSize);
				noStroke();
			}
		}

		function drawFaceBStage(posX, posY, faceBwidth, isLast = false) {
			fill(co[1]);

			let w = unitSize * faceBwidth;

			rect(posX, posY, w, -unitSize);
			stroke(co[3]),
				line(posX, posY, posX, posY - unitSize);
			line(posX + w, posY, posX + w, posY - unitSize);
			noStroke();
			window(posX, posY, faceBwidth);

			if (isLast) {
				fill(co[2]);
				let YOverlay = posY - unitSize;
				let halfUnitSize = unitSize / 2;
				stroke(co[3]);
				beginShape();
				vertex(posX, YOverlay);
				vertex(posX - halfUnitSize, YOverlay - halfUnitSize);
				vertex(posX + w - halfUnitSize, YOverlay - halfUnitSize)
				vertex(posX + w, YOverlay);
				endShape(CLOSE);
				noStroke();
			}
		}

		function window(posX, posY, faceBwidth = 1) {
			fill(co[3]);
			let thirdSize = unitSize / 3;
			let marginX = posX + thirdSize;
			let marginY = posY - 2 * thirdSize;

			for (let i = 0; i < faceBwidth; i++) {
				let spacerX = (unitSize * i);
				rect(marginX + spacerX, marginY, thirdSize, thirdSize);
			}
		}
	}

}

function saveImage(){
  saveCanvas('myCity', 'png');
}