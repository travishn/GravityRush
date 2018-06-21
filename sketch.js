let player;
let paused = false;
let isOver = false;
let bgX = 0;
let terrain = [];
const parallax = 0.8;
let options = [true, false];
let option;
let playerImg;
let playerImg2;
let bgImg;
let terrainImg;
let song;
let jump;
let reverse;
let cnv;

function preload() {
	bgImg = loadImage('graphics/retro_background.jpg');
	playerImg = loadImage('graphics/player_walk.png');
	playerImg2 = loadImage('graphics/player_walk2.png');
	playerImg3 = loadImage('graphics/player_walk3.png');
	playerImg4 = loadImage('graphics/player_walk4.png');
	terrainImg = loadImage('graphics/grassMid.png');
	terrainImg2 = loadImage('graphics/grassMid2.png');
	song = loadSound('audio/Galaxy.mp3');
	jump = loadSound('audio/jumpTrim.mov');
	reverse = loadSound('audio/reversePolarityTrim.mov');
}

// CREDIT TO EFFECTS GRINDER FOR SFX
function setup() {
	cnv = createCanvas(1080, 720);
	resetGame();
	startBtn = createButton('Start Game');
	startBtn.mousePressed(resetGame);

}

function windowResized() {
	centerCanvas();
}

function centerCanvas() {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
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
				player.topLimit = -100;
				player.bottomLimit = height + this.playerHeight;
		}

		if (terrain[i].offScreen()) terrain.shift();
		if (player.isDead(terrain[i])) {
			gameOver();
		}
	}
	
	option = options[Math.floor(Math.random()*options.length)];
	if (!isOver && inRange(terrain[terrain.length-1])) terrain.push(new Terrain(option));

	player.update();
	player.show();
}

function gameOver() {
	terrain.forEach(ground => (ground.speed = 0));
	textSize(64);
	textAlign(CENTER, CENTER);
	text('GAMEOVER', width / 2, height / 2);
	textSize(30);
	text('Press "R" to restart', width / 2, height / 1.75);
	isOver = true;
	song.pause();
}

function pause() {
	if (paused) terrain.forEach(ground => (ground.speed = 0));
}

function resetGame() {
	terrain = [];
	isOver = false;
	bgX = 0;
	centerCanvas();
	player = new Player();
	let firstTerrain = new Terrain(false);
	firstTerrain.x = 400;
	firstTerrain.terrainWidth = 1100;
	terrain.push(firstTerrain);
	song.jump(0);
	song.setVolume(0.5);
}

function inRange(currentTerrain) {
	return (currentTerrain.x + currentTerrain.terrainWidth < random(600, 800));
}

function keyPressed() {
	if (keyCode === 71) {
		player.reversePolarity();
		reverse.play();
		reverse.setVolume(0.4);
	}

	if (key === ' ') {
		player.jump();
		jump.play();
		jump.setVolume(0.3);
	}

	if (keyCode === 82) resetGame();
}
