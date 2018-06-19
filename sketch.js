let player;
let terrain = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	player = new Player();
	terrain.push(new Terrain());
}

function draw() {
	background(151, 234, 207);
	
	if (frameCount % 150 === 0) terrain.push(new Terrain());
	
	for (let i = terrain.length - 1; i >= 0; i--) {
		terrain[i].show();
		terrain[i].update();

		if (terrain[i].hits(player)) {
			player.topLimit = terrain.y + 18;
		}	
		// else {
		// 	player.topLimit = 0;
		// }
		
		if (terrain[i].offScreen()) terrain.shift();
	}

	player.update();
	player.show();
}

function keyPressed() {
	if (keyCode === 71) player.reversePolarity();
	if (key === ' ') player.jump();
}