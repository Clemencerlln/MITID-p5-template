// based on P5 example: https://p5js.org/examples/Math-And-Physics-Forces/
class Player{
    constructor(m, x, y, c = "#f2cf22") {
    this.mass = m;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.color = c;
    this.size = this.mass*40;
    this.onGround = false;
  }

  // Apply force according to Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    // Change the velocity by the acceleration
    this.velocity.add(this.acceleration);

    // Change the position by the velocity
    this.position.add(this.velocity);

    // Clear the acceleration each frame
    this.acceleration.mult(0);
  }

  // 
  display() {
    fill(this.color);
    rect(this.position.x, this.position.y, this.size);
  }

  // Check collision with the ground (pre-defined y value)
  checkEdges(groundPosition = 450) {
    if (this.position.y >= groundPosition - this.size) {
        this.position.y = groundPosition - this.size;
        this.velocity.y = 0;
        this.onGround = true;
    } else {
        this.onGround = false;
    }
  }
}