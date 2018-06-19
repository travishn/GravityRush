class Terrain {
  constructor(flipped) {
    this.y = 0;
    this.x = width + 100;
    this.terrainHeight = height/9;
    this.terrainWidth = random(300, 700);
    this.speed = 7;
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

    // console.log((player.x + player.playerWidth >= this.x &&
    //   player.x <= this.x + this.terrainWidth &&
    //   player.y + player.playerHeight >= (height-this.terrainHeight)));

    // console.log(player.x <= this.x + this.terrainWidth &&
    //   player.y + player.playerHeight >= this.y && 
    //   player.y <= this.y + this.terrainHeight); 

    if (this.flipped) return ((player.x + player.playerWidth >= this.x &&
      player.x <= this.x + this.terrainWidth &&
      player.y + player.playerHeight >= this.y &&
      player.y <= this.y + this.terrainHeight));

    else {
      return (player.x + player.playerWidth > this.x && player.x < this.x + this.terrainWidth);
    }

    // else return ((player.x + player.playerWidth >= this.x &&
    //   player.x <= this.x + this.terrainWidth &&
    //   player.y <= this.y + this.terrainHeight &&
    //   player.y + player.playerHeight >= this.y));

  }
}