import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
// import Person from './Person';

export default function People({ data }) {
  //   const handleClick = () => {
  //     console.log();
  //   };
  return (
    <>
      <h1>People</h1>
      <Grid stackable columns="3">
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Card onClick={() => console.log(people)}>
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
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
