let player;
let terrain = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	player = new Player();
	terrain.push(new Terrain(false));
}

function draw() {
	background(151, 234, 207);
	
	
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

	// console.log(player.bottomLimit);
	if (frameCount % 150 === 0) terrain.push(new Terrain(!terrain[terrain.length-1].flipped));

	player.update();
	player.show();
}

function keyPressed() {
	if (keyCode === 71) player.reversePolarity();
	if (key === ' ') player.jump();
}