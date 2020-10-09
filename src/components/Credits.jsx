import React from 'react';

export default function Credits() {
  return (
    <div id="homePage">
      <h1>Credits:</h1>
      <p id="creditMessage">
        Data:{' '}
        <a href="https://swapi.dev/" id="link">
          Star Wars API
        </a>
      </p>
      <p id="creditMessage">
        Youtube Tutorial:{' '}
        <a href="https://youtu.be/EC5ZvP87P2k" id="link">
          Jason Rivera
        </a>
      </p>
      <p id="creditMessage">
        Background:{' '}
        <a href="https://code.sololearn.com/Wj4LDbPcKmIL/#html" id="link">
          CSS Animated Star Background (SoloLearn)
        </a>
      </p>
      <p id="creditMessage">
        Star Wars Logo:{' '}
        <a
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/320px-Star_Wars_Logo.svg.png"
          id="link"
        >
          Wikimedia
        </a>
      </p>
    </div>
  );
}
