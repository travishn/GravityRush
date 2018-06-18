## Gravity Rush

### Background and Overview

Gravity Rush is an endless side-scrolling video game inspired by Gravity Guy, where players have the ability to reverse the polarity of the world to manipulate their surroundings to survive. The goal of the game is to accrue as many points as possible before dying. As time progresses, the side-scrolling velocity will increase making it more difficult to survive.

### Functionality & MVP  

In Gravity Rush, users will be able to:

- [ ] Toggle a key input to reverse the current polarity
- [ ] Jump to avoid obstacles
- [ ] View current distance travelled / points yielded
- [ ] Start, pause, and restart the game


In addition, this project will include:

- [ ] An About modal describing the basic functionality
- [ ] Music and sound effects, which can be muted

### Wireframes

This app will consist of a single screen with the simulation canvas, playback controls, and nav links to the Github, my LinkedIn, and the About and Details modals.  

The simulation canvas will include a dropdown for selecting the initial color of the creation object. Users will click and drag to create objects of a certain size and vector angle.

Playback controls along the bottom will include Start, Pause, and Restart buttons.

On the top left, there will be a speaker phone to toggle the music/sfx on and off.

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- `Web Audio API` for sound generation, processing and control. `WebAudioAPI` allows for simultaneous sounds with more dependable time triggering
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be four scripts involved in this project:

`game.js`: this script will handle the logic for creating and updating the necessary DOM elements.

`player.js`: this script will house the physics logic for the asteroids.

`audio.js`: this script will handle the audio for the music and sound effects of the game

`terrain.js`: this script script will house the logif for generating new terrain that the player can jump on


### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 4 scripts outlined above.  Learn the basics of `Web Audio API`.  Goals for the day:

- [ ] Get `webpack` serving files and frame out index.html
- [ ] Learn enough `Web Audio` to render an object to the `Canvas` element and create a sound
- [ ] Create toggle gravity ability and jumping mechanics for the player object

**Day 2**: Create the logic backend. Build out functions for handling collisions with terrain and off canvas. Goals for the day:

- [ ] Implement terrain for the player to jump and walk on
- [ ] Create collision detection logic when player is on edge of canvas
- [ ] Have a pop up indicating game over with option to restart

**Day 3**: Install the controls for the user to interact with the game. Goals for the day:
- [ ] Display distance travelled / points earned in the top right of the screen
- [ ] Create logic for increasing velocity based on time progression
- [ ] Add styling for the player, terrain, and obstacles


**Day 4**: Install the controls for the user to interact with the game. Style the frontend, making it polished and professional. Goals for the day:

- [ ] Create controls for start, stop, and restart
- [ ] Have a styled `Canvas`, nice looking controls and title
