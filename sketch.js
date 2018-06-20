let player;
let paused = false;
let bgX = 0;
let terrain = [];
const parallax = 0.8;
let options = [true, false];
let option;
let playerImg;
let playerImg2;
let bgImg;
let terrainImg;
let isOver = false;

function preload() {
	bgImg = loadImage('graphics/retro_background.jpg');
	playerImg = loadImage('graphics/player_sprite2.png');
	playerImg2 = loadImage('graphics/player_upside_down.png');
	terrainImg = loadImage('graphics/snowMid.png');
	terrainImg2 = loadImage('graphics/snowMid2.png');
}

function setup() {
	createCanvas(1080, 700);
	player = new Player();
	let firstTerrain = new Terrain(false);
	firstTerrain.x = 400;
	firstTerrain.terrainWidth = 1100; 
	terrain.push(firstTerrain);
}

function draw() {
	background(0);
	image(bgImg, bgX, 0, bgImg.width, height);
	bgX -= terrain[terrain.length-1].speed * 0.8;

	if (bgX <= -bgImg.width + width) {
		image(bgImg, bgX + bgImg.width, 0, bgImg.width, height);
		if (bgX <= -bgImg.width) {
			bgX = 0;
		}
	}  
	
	
	for (let i = terrain.length - 1; i >= 0; i--) {
		terrain[i].show();
		terrain[i].update();
		
		if (terrain[i].hits(player) && terrain[i].flipped) {
			player.topLimit = terrain[i].terrainHeight;
		} else if (terrain[i].hits(player) && terrain[i].flipped === false) {
			player.bottomLimit = height - (terrain[i].terrainHeight) - player.playerHeight;
		} else {
			player.topLimit = 0;
			player.bottomLimit = height + this.playerHeight;
		}

		if (terrain[i].offScreen()) terrain.shift();
	}

	option = options[Math.floor(Math.random()*options.length)];
	if (!isOver && frameCount % 65 === 0) terrain.push(new Terrain(option));

	player.update();
	player.show();

	if (player.isDead()) {
		terrain.forEach(ground => (ground.speed = 0));
		textSize(64);
		textAlign(CENTER, CENTER);
		text('GAMEOVER', width / 2, height / 2);
		isOver = true;
	}


}

function keyPressed() {
	if (keyCode === 71) player.reversePolarity();
	if (key === ' ') player.jump();
}
