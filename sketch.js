let player;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	player = new Player();
}

function draw() {
	background(151, 234, 207);
	player.update();
	player.show();
}