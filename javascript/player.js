class Player {
  constructor() {
    this.y = height/2;
    this.x = 100;
    this.gravity = 0.4;
    this.velocity = 0;
    this.liftForce = 16;
    this.midJump = false;
    this.topLimit = (height/9) + 18;
    this.bottomLimit = (height - (height/9));
  }


  show() {
    fill(255);
    let obj = ellipse(this.x, this.y, 32, 32);
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > this.bottomLimit) {
      this.y = this.bottomLimit;
      // this.gravity = 0;
    }

    if (this.y < this.topLimit) {
      this.y = this.topLimit;
      // this.gravity = 0;
    }
  }

  reversePolarity() {
    if (this.y === this.bottomLimit || this.y === this.topLimit) {
      this.gravity = -(this.gravity);
      this.velocity = this.gravity;
    }
  }

  jump() {
    if (this.y !== this.bottomLimit && this.gravity > 0) this.midJump = true;
    if (this.y !== this.topLimit && this.gravity < 0) this.midJump = true;

    if (this.midJump === false) {
      this.velocity = 0;
      if (this.gravity > 0) this.velocity -= this.liftForce;
      else this.velocity += this.liftForce;
    }

    this.midJump = false;
  }
}
