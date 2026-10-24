// our color palette
const colors = ["#F2A900", "#CC6F00", "#4D2A00"];

// button to generate new art
const button = document.querySelector("#stacks");
button.addEventListener("click", function(){
    generateNewArt();
});


function setup(){
    createCanvas(800, 500);
    noStroke();
    generateNewArt();
}

// we don't need to loop other stuffs
function draw(){   
    
}


function generateNewArt(){
    // create a new bg
    background("#F9E6A8");

    // we loop 10 times, each time we generate a stack
    // with its random color
    for(let i = 0; i <= 10; i=i+1){
        let currentColor = parseInt(random(colors.length));

        createAStack(
            random(200,width-200), 
            random(300, 450), 
            random(5, 10), 
            random(20, 50), 
            colors[currentColor]);
    }
}

function createAStack(x, y, amount, size, cColor){
    fill(cColor);
    for(let i = 0; i <= amount; i++){
        ellipse(x, y-(i*5), size, size/2);
    }
}