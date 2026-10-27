
let size = 50;


let randomButton = document.querySelector("#randomize");

randomButton.addEventListener("click", function(){
    dessinerRonds();

});




function setup(){
    // function that runs only once
    createCanvas(1500, 700);
    dessinerRonds();

//noStroke();


}

function draw(){
    // function that runs repeatedly
    //background(200);
    //generateStacks(5)

}   
 
function dessinerRonds () {
    for(let x = 0; x <= width; x = x + size){
        for(let y = 0; y <= height; y = y + size){

            let r = random(0, 30);
            if(r<5){
                fill("#F000E0");
            }else if (r<10) {
                fill("#eedd90");
            }else if (r<15){
                fill("#8836b5");
            }else if (r<20){
                fill("#8bb17a");   
            }else if (r<25){
                fill("#e8b980");  
            }else{
                fill("#8a75d8");
            }

            circle(x, y, size+20);
            
        }
    }


}