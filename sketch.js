let player;
var started = false;
let isOver = false;
let bgX = 0;
let counter = 0;
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
let muted = false;
let paused = false;

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
function loadElement(filename, type) {
	if (type === 'sound') {
		loadSound(filename, fileLoaded);
	} else if (type === 'image') {
		loadImage(filename, fileLoaded);
	}

	function fileLoaded(media) {
		counter++;
		if (counter === totalFiles) {
			loading = false;
		}

		if (type === 'sound') {
			songs.push(media);
		} else if (type === 'image') {
			images.push(media);
		}
	}
}

function setup() {
	cnv = createCanvas(window.innerWidth/1.3, window.innerHeight);
	image(bgImg, bgX, 0, bgImg.width, height);
	resetGame();
	noLoop();
	cnv.parent('canvas');
}

function startSketch() {
	started = true;
	song.jump(0);
	jump.setVolume(0.2);
	reverse.setVolume(0.3);
	song.setVolume(0.5);

	loop();
}

function mute() {
	if (muted) {
		muted = false;
		jump.setVolume(0.2);
		reverse.setVolume(0.3);
		song.setVolume(0.5);
	} else {
		muted = true;
		song.setVolume(0);
		jump.setVolume(0);
		reverse.setVolume(0);
	}
}

function windowResized() {
	// resizeCanvas(windowWidth, windowHeight);
}

function centerCanvas() {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
}

function draw() {
	if (started) {
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
			setLimit(terrain[i]);
			deleteTerrain(terrain[i]);
	
			if (player.isDead(terrain[i])) {
				gameOver();
				player.showFinalScore();
			} else {
				player.showScore();
			}
		}
		
		option = options[Math.floor(Math.random()*options.length)];
		if (!isOver && inRange(terrain[terrain.length-1])) {
			const nextTerrain = new Terrain(option);
			terrain.push(nextTerrain);
		}
	
		player.update();
		player.show();
	}
}

function deleteTerrain(targetTerrain) {
	if (targetTerrain.offScreen()) terrain.shift();
}

function setLimit(targetTerrain) {
	if (targetTerrain.hits(player) && targetTerrain.flipped) {
		player.topLimit = targetTerrain.terrainHeight;
	} else if (targetTerrain.hits(player) && targetTerrain.flipped === false) {
		player.bottomLimit = height - (targetTerrain.terrainHeight) - player.playerHeight + 10;
	} else {
		player.topLimit = -100;
		player.bottomLimit = height + this.playerHeight;
	}
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
	if (paused) {
		paused = false;
		loop();
	} else {
		paused = true;
		noLoop();
		textSize(64);
		textAlign(CENTER, CENTER);
		text('PAUSED', width / 2, height / 2);
	}

	mute();
}

function resetGame() {
	terrain = [];
	isOver = false;
	bgX = 0;
	player = new Player();
	let firstTerrain = new Terrain(false);
	firstTerrain.x = 400;
	firstTerrain.terrainWidth = 1100;
	terrain.push(firstTerrain);

	if (started) {
		song.jump(0);
		song.setVolume(0.5);
		reverse.setVolume(0.2);
		jump.setVolume(0.2);
	}
}

function inRange(currentTerrain) {
	return (currentTerrain.x + currentTerrain.terrainWidth < random(600, 800));
}

function keyPressed() {
	if (keyCode === 71) {
		if (isOver) return;
		player.reversePolarity();
		reverse.play();
	}
	else if (key === ' ') {
		if (isOver) return;
		player.jump();
		jump.play();
	}
	else if (keyCode === 82) resetGame();
	else if (keyCode === 77) mute();
	else if (keyCode === 80) pause();
}
