class Player {
  constructor() {
    this.y = height/2;
    this.x = 100;
    this.playerHeight = 65;
    this.playerWidth = 40;
    this.gravity = 0.4;
    this.velocity = 0;
    this.liftForce = 10;
    this.midJump = false;
    this.topLimit = 0;
    this.bottomLimit = height + this.playerHeight;
    this.strafing = false;
  }


  show() { 
    if (this.gravity > 0) {
      if (this.strafing === true) return image(playerImg2, this.x, this.y, this.playerWidth, this.playerHeight);
      else return image(playerImg, this.x, this.y, this.playerWidth, this.playerHeight);
    } else {
        if (this.strafing === true) return image(playerImg3, this.x, this.y, this.playerWidth, this.playerHeight);
        else return image(playerImg4, this.x, this.y, this.playerWidth, this.playerHeight);
      }
    }

  update() {
    if (frameCount % 8 === 0) {
      this.strafing = !this.strafing;
    }

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

  isDead(terrain) {
    // if (terrain.flipped) return player.y < terrain.terrainHeight;
    // return (player.y + player.playerHeight) > height - terrain.terrainHeight + 20;
    return (player.y < 0 || player.y > height - player.playerHeight);
  }
}
