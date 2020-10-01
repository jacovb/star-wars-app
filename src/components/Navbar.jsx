import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/" id="navButton">
        Home
      </Link>

      <Link to="/people" id="navButton">
        People
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
    </div>
  );
}
