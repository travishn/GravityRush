let player;
let terrain = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	player = new Player();
	terrain.push(new Terrain());
}

function draw() {
	background(151, 234, 207);
	player.update();
	player.show();

	if (frameCount % 150 === 0) terrain.push(new Terrain());

	for (const ground of terrain) {
		ground.show();
		ground.update();
	}
}

function keyPressed() {
	if (keyCode === 71) player.reversePolarity();
	if (key === ' ') player.jump();
}