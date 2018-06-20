class Terrain {
  constructor(flipped) {
    this.y = 0;
    this.x = width;
    this.terrainHeight = random(height/7, height/4);
    this.terrainWidth = random(250, 700);
    this.speed = 12;
    this.flipped = flipped;
  }

  show() {
    fill(255); 
    if (this.flipped) rect(this.x, this.y, this.terrainWidth, this.terrainHeight);
    else rect(this.x, height-this.terrainHeight, this.terrainWidth, this.terrainHeight);
  }

  update() {
    this.x -= this.speed;
  }

  offScreen() {
    return this.x < -this.terrainWidth;
  }

  hits(player) {
    if (this.flipped) return ((player.x + player.playerWidth >= this.x &&
      player.x <= this.x + this.terrainWidth &&
      player.y + player.playerHeight >= this.y &&
      player.y <= this.y + this.terrainHeight));

    else {
      return (player.x + player.playerWidth > this.x && 
        player.x < this.x + this.terrainWidth &&
        player.y >= height - player.playerHeight - this.terrainHeight) &&
        player.y <= height;
    }
  }
}