class Player {
  constructor() {
    this.y = height/2;
    this.x = 25;
    this.gravity = 10;
  }


  show() {
    fill(255);
    let obj = ellipse(this.x, this.y, 32, 32);
  }

  update() {
    this.y += this.gravity;

    if (this.y > height) {
      this.y = height;
      this.gravity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.gravity = 0;
    }
  }

  reversePolarity() {
    this.gravity = -(this.gravity);
  }
}
