class Terrain {
  constructor() {
    this.x = width;
    this.top = height/10;
    this.terrainWidth = random(500, 800);
    this.speed = 5;
  }

  show() {
    fill(255);
    rect(this.x, 0, this.terrainWidth, this.top);
  }

  update() {
    this.x -= this.speed;
  }
}