class Terrain {
  constructor() {
    this.y = 0;
    this.x = width + 100;
    this.terrainHeight = height/9;
    this.terrainWidth = random(300, 700);
    this.speed = 7;
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.terrainWidth, this.terrainHeight);
  }

  update() {
    this.x -= this.speed;
  }

  offScreen() {
    return this.x < -this.terrainWidth;
  }

  hits(player) {
    // console.log(this.getDistance(this.x, this.y, player.x, player.y) < ((this.y/2) + (32/2)));
    // console.log((player.y === this.terrainHeight));
    // console.log((this.x === 100));
    console.log(this.x);
    // if (player.y-18 === this.y && this.x <= 0) return true;

    // console.log((player.x + player.playerWidth >= this.x &&
    //   player.x <= this.x + this.terrainWidth &&
    //   player.y + player.playerHeight >= this.y &&
    //   player.y <= this.y + this.terrainHeight));

    return false;
  }

  getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }
}