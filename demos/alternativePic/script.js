let capture;
let nbrImg = 10;
let arrImg = [];

let blendMood;
let arrBlend = [];

let R;

function setup() {
  	createCanvas(windowWidth, windowHeight);
	capture = createCapture(VIDEO);
	capture.hide();	
	
	//generer un mode de fusion aleatoire
	arrBlend = [BLEND, LIGHTEST, DIFFERENCE, EXCLUSION, DARKEST, HARD_LIGHT, DODGE, BURN, ADD];
	blendMood = arrBlend[int(random(arrBlend.length))];
	console.log(blendMood);
	
	//colonnes
	for(let i = 0; i < nbrImg; i++){
		arrImg[i] = [];		
		//rect destination
		let dx = int(random(100, 400));
		let dy = int(random(100, 400));
		let dw = int(random(100, 400));
		let dh = int(random(100, 400));
		// rect source
		let sx = int(random(100, 800));
		let sy = int(random(100, 800));
		let sw = int(random(100, 800));
		let sh = int(random(100, 800));
		arrImg[i].push(dx,dy,dw,dh,sx,sy,sw,sh);
	}	
	
	R = random(255);
}

function draw() {
	generate();
}



function generate(){
	image(capture, 0, 0, width, width * capture.height / capture.width);	
	for(i = 0; i < nbrImg; i++){
		
		tint(74, 255, R, 169);
		blend(capture, arrImg[i][0], arrImg[i][1], arrImg[i][2], arrImg[i][3], arrImg[i][4]/2, arrImg[i][5]/2, arrImg[i][6]/2, arrImg[i][7]/2, blendMood);
	}
	
	
}