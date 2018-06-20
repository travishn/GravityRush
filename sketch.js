let player;
let paused = false;
let bgX = 0;
let terrain = [];
const parallax = 0.8;
let options = [true, false];
let option;
let bgImg;

function preload() {
	bgImg = loadImage('graphics/retro_background.jpg');
}

function setup() {
	createCanvas(1200, 800);
	player = new Player();
	let firstTerrain = new Terrain(false);
	firstTerrain.x = 500;
	firstTerrain.terrainWidth = 1000; 
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
			player.bottomLimit = height - player.playerHeight; 
		}

		if (terrain[i].offScreen()) terrain.shift();
	}

	option = options[Math.floor(Math.random()*options.length)];
	// if (frameCount % 100 === 0) terrain.push(new Terrain(!terrain[terrain.length-1].flipped));
	if (!player.isDead() && frameCount % 65 === 0) terrain.push(new Terrain(option));

	player.update();
	player.show();
	if (player.isDead()) {
		terrain.forEach(ground => (ground.speed = 0));
	}


}

function keyPressed() {
	if (keyCode === 71) player.reversePolarity();
	if (key === ' ') player.jump();
}
