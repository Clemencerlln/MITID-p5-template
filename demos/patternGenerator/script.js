//color scheme from https://color.adobe.com/Copy-of-Wikipedia-color-theme-9248024/?showPublished=true

let colors = [
  'rgba(208, 210, 196, 1)',
  'rgba(84,  176, 189, 1)',
  'rgba(7,   111, 138, 1)',
  'rgba(214,  57,  50, 1)',
  'rgba(3,    42,  47, 1)'
];
let clouds = [];
let N = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < N; i++) {
    let c = new Cloud();
    clouds.push(c);
  }
  background(20);
  strokeWeight(2);
  stroke('rgba(255, 255, 255, .1)');
  rectMode(CENTER);
}

function draw() {
  clouds.forEach(function(c) {
    c.update();
    if (c.life > 0) c.render();
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}

function Cloud() {
  this.x = random(width);
  this.y = random(height);
  this.proportion = random(0.25, 1);
  this.vx = 0;
  this.vy = random(-.2, -.6);
  this.w = random(10, 50);
  this.h = random(10, 50);
  this.life = random(250, 500);
  this.stroke = colors[floor(random(colors.length))];

  this.update = function() {
    this.x += this.vx;
    this.y += this.vy;
    this.proportion += random(-0.05, 0.05);
    this.proportion = constrain(this.proportion, 0.25, 1);
    this.life--;

    if (random() < 0.15)
      this.stroke = colors[floor(random(5))];
  }
  this.render = function() {
    stroke(this.stroke);
    push();
    translate(this.x, this.y);

    scale(this.proportion);
    rotate(-PI / 6);
    scale(1, .86062); // scale vertical 86.062%
    shearX(PI / 6); // skew 30 degrees

    rect(0, 0, this.w, this.h);
    pop();
  }
}