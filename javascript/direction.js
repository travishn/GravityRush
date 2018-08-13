const populateDOM = () => {
  const parent = document.querySelector('#title-container');

  // Game title
  const titleText = document.createElement('h1');
  titleText.id = 'title-text';
  titleText.innerHTML = 'Gravity Rush';

  // Instruction header
  const instructionTitle = document.createElement('h2');
  instructionTitle.className = 'instruction-container';
  instructionTitle.innerHTML = 'Instructions';

  // Game Description
  const instructionText = document.createElement('p');
  instructionText.innerHTML = "You have the ability to reverse the polarity of the world and manipulate your surroundings. Use your gravitaitonal powers and jumping abilities to traverse over space terrains and avoid getting sucked into nothingness.";

  // Instruction key
  const instructionKey = document.createElement('h2');
  instructionKey.className = 'instruction-container';
  instructionKey.innerHTML = 'How to Play';
  const dir1 = document.createElement('p');
  dir1.innerHTML = 'Press G to Reverse Gravity';
  const dir2 = document.createElement('p');
  dir2.innerHTML = 'Press SpaceBar to Jump';
  const dir3 = document.createElement('p');
  dir3.innerHTML = 'Press M to mute';
  const dir4 = document.createElement('p');
  dir4.innerHTML = 'Press P to Pause';
  const dir5 = document.createElement('p');
  dir5.id = 'last-direction';
  dir5.innerHTML = 'Press R to Restart';

  // Start Button
  const startButton = document.createElement('p');
  startButton.id = 'start-btn';
  startButton.setAttribute('onclick', 'startSketch()');
  startButton.innerHTML = 'Start Game';

  // Social Media Icons
  const socialMedia = document.createElement('div');
  socialMedia.id = 'social-media-links';

  const github = document.createElement('a');
  github.href = 'https://github.com/travishn';
  const githubPhoto = document.createElement('img');
  githubPhoto.className = 'logo';
  githubPhoto.src = 'graphics/github.png';

  github.appendChild(githubPhoto);
  socialMedia.appendChild(github);

  const linkedin = document.createElement('a');
  linkedin.href = 'https://www.linkedin.com/in/travishn/';
  const linkedinPhoto = document.createElement('img');
  linkedinPhoto.className = 'logo image-right';
  linkedinPhoto.src = 'graphics/linkedin.png';

  linkedin.appendChild(linkedinPhoto);
  socialMedia.appendChild(linkedin);

  parent.appendChild(titleText);
  parent.appendChild(instructionTitle);
  parent.appendChild(instructionText);
  parent.appendChild(instructionKey);
  parent.appendChild(dir1);
  parent.appendChild(dir2);
  parent.appendChild(dir3);
  parent.appendChild(dir4);
  parent.appendChild(dir5);
  parent.appendChild(startButton);
  parent.appendChild(socialMedia);
};

const waitForElement = (elementId, callBack) => {
  setTimeout(function () {
    const canvas = document.getElementById(elementId);
    if (canvas) {
      setTimeout(callBack(), 1000);
    } else {
      waitForElement(elementId, callBack);
    }
  }, 1100);
};