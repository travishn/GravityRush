class Terrain {
  constructor() {
    this.x = width+100;
    this.top = height/9;
    this.terrainWidth = random(300, 700);
    this.speed = 7;
  }

  show() {
    fill(255);
    rect(this.x, 0, this.terrainWidth, this.top);
  }

  update() {
    this.x -= this.speed;
  }
}