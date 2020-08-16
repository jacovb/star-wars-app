import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Menu color="yellow" inverted>
      <Container>
        <Link to="/">
          <Menu.Item name="star wars API" position="left" />
        </Link>

        <Link to="/people">
          <Menu.Item name="people" />
        </Link>

        <Link to="/planets">
          <Menu.Item name="planets" />
        </Link>

        <Link to="/species">
          <Menu.Item name="species" />
        </Link>

        <Link to="/starships">
          <Menu.Item name="starships" />
        </Link>

        <Link to="/vehicles">
          <Menu.Item name="vehicles" position="right" />
        </Link>
      </Container>
    </Menu>
  );
}
