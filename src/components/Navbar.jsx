import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/" id="navButton">
        Home
      </Link>

      <Link to="/people" id="navButton">
        Characters
      </Link>

      <Link to="/planets" id="navButton">
        Planets
      </Link>

      <Link to="/species" id="navButton">
        Species
      </Link>

      <Link to="/starships" id="navButton">
        Starships
      </Link>

      <Link to="/vehicles" id="navButton">
        Vehicles
      </Link>

      <Link to="/credits" id="navButton">
        Credits
      </Link>
    </div>
  );
}
