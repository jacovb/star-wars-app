import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import Person from './Person';

export default function People({ data }) {
  return (
    <>
      <h1>People</h1>
      <Grid stackable columns="3">
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Link to={`/people/${people.name}`}>
                <Card onClick={() => {}}>
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
              </Link>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
