let player;
let terrain = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	player = new Player();
	terrain.push(new Terrain());
}

function draw() {
	background(151, 234, 207);
	
	
	for (let i = terrain.length - 1; i >= 0; i--) {
		terrain[i].show();
		terrain[i].update();

		if (terrain[i].hits(player)) {
			player.topLimit = terrain[i].terrainHeight;
		}	
		else {
			player.topLimit = 0;
		}
		
		if (terrain[i].offScreen()) terrain.shift();
	}

	if (frameCount % 150 === 0) terrain.push(new Terrain());

	player.update();
	player.show();
}

function keyPressed() {
	if (keyCode === 71) player.reversePolarity();
	if (key === ' ') player.jump();
}