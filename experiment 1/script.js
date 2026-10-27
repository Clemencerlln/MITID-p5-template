
//  variable name                        id of the button 
//       V                                      V
let randomButton = document.querySelector("#randomize");

randomButton.addEventListener("click", function(){
    background(73);
    generateStacks();
});

function setup(){
    // function that runs only once
    createCanvas(800, 500);
noStroke();


background(73);
generateStacks(5);
}

function draw(){
//    we call the function 
//    stackOfCircle(100, 200, "#F000E0");
//    stackOfCircle(400, 300, "#eedd90");
}  

//we create a function to generate stacks 
function generateStacks(stackAmount){
//we creat a loop to generate 10 stacks 
// i++ is the shortcut for i=i+1
for(let i=0; i<stackAmount; i++){
    let randomX = random(0, 800);
    let randomY = random(0, 500);
    let randomColor = random(0, 255);
    stackOfCircle(randomX, randomY, randomColor);
    }
}


//we create a function to display a stack of circles
function stackOfCircle(posX, posY, color){
    fill(color);
    for(let i=0; i < 10; i=i+1){
      circle(posX, posY + i*10, 20);
    }
}


//a function that is triggered on mouse click
function mousePressed(){
    fill("#FF0000");
    circle(mouseX,mouseY,50);
}

function mousePressed() {
    if (mouseX >= 0, mouseX <= width, 
        mouseY >= 0 && mouseY <= height) {
        generateGrid();
    }
}   