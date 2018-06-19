class Player {
  constructor() {
    this.y = height/2;
    this.x = 25;
    this.gravity = 0.4;
    this.velocity = 0;
    this.liftForce = 16;
  }


  show() {
    fill(255);
    let obj = ellipse(this.x, this.y, 32, 32);
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      // this.gravity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      // this.gravity = 0;
    }
  }

  reversePolarity() {
    this.gravity = -(this.gravity);
    this.velocity = this.gravity;
  }

  jump() {
    this.velocity = 0;
    if (this.gravity > 0) this.velocity -= this.liftForce;
    else this.velocity += this.liftForce;
  }
}
