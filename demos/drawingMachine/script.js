// canvas size
const w = document.body.clientWidth;
const h = w / 1920*720;

// cordinate for the dot
let x = w/2;
let y = h/2;

// dot parameters
let size = 5;
let color = "#3f3f3f";

function setup() {
  createCanvas(w, h);
  background("#d0cdcd");
  noStroke();
}

function draw() {
  // Update x and y if an arrow key is pressed.
  if (keyIsPressed === true) {
    if (keyCode === 38) { // Up arrow key
      y -= 1;
    } else if (keyCode === 40) { // Down arrow key
      y += 1;
    } else if (keyCode === 37) { // Left arrow key
      x -= 1;
    } else if (keyCode === 39) { // Right arrow key
      x += 1;
    }
  }

  // Style the circle.
  fill(color);

  // Draw the circle at (x, y).
  circle(x, y, size);
}

// we listen to inputs for color and size
// "change" event triggers when the value of the input changes
const sizeInput = document.querySelector("#size");
sizeInput.addEventListener("change", (e)=>{
	size = sizeInput.value;
});

const colorInput = document.querySelector("#color");
colorInput.addEventListener("change", (e)=>{
	color = colorInput.value;
});

const eraseButton = document.addEventListener("click", (e)=>{
	// we can reload window 
	// window.location.reload();
	// or just redraw the background
	background("#d0cdcd");
})