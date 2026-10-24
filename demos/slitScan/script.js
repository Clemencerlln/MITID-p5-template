let video; 
let x = 0;

function setup(){
  createCanvas(800, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  background(150);
}

function draw(){
  video.loadPixels();
  let w = video.width;
  let h = video.height;
  
  copy(video, w/2, 0, 1, h, x, 0, 1, h); 
  x++;
  if(x>width){
  x=0;
  }
}