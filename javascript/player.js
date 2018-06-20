class Player {
  constructor() {
    this.y = height/2;
    this.x = 100;
    this.playerHeight = 32;
    this.playerWidth = 32;
    this.gravity = 0.4;
    this.velocity = 0;
    this.liftForce = 12;
    this.midJump = false;
    this.topLimit = 0;
    this.bottomLimit = (height - this.playerHeight);
  }


  show() {
    fill(255);
    let obj = rect(this.x, this.y, this.playerWidth, this.playerHeight);
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= this.bottomLimit) {
      this.y = this.bottomLimit;
    }

    if (this.y < this.topLimit) {
      this.y = this.topLimit;
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

  isDead() {
    return (player.y === 0 || player.y === height - player.playerHeight);
  }
}
