import React from 'react';
import { Card } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

export default function Person(props) {
  //neither props nor data works to get data to this component
  const { person } = useParams();
  const personProfile = person;
  console.log(props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{personProfile.name}</Card.Header>
        <Card.Description>
          <strong>Height</strong>
          <p>{personProfile.height}</p>
          <strong>Mass</strong>
          <p>{personProfile.mass}</p>
          <strong>Hair Color</strong>
          <p>{personProfile.hair_color}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
