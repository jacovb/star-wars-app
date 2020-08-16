import React from 'react';
import { Card } from 'semantic-ui-react';

export default function Person({ data }) {
  data.map((people, i) => {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{people.name}</Card.Header>
          <Card.Description>
            <strong>Height</strong>
            <p>{people.height}</p>
            <strong>Mass</strong>
            <p>{people.mass}</p>
            <strong>Hair Color</strong>
            <p>{people.hair_color}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  });
}
