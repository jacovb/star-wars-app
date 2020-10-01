import React from 'react';
// import { Card, Grid } from 'semantic-ui-react';

export default function Species({ data }) {
  return (
    <>
      <h1>Species</h1>
      <div id="itemContainer">
        {data.map((species, i) => {
          return (
            <div id="item" key={i}>
              <h3>{species.name}</h3>
              <strong>Language</strong>
              <p>{species.language}</p>
              <strong>Height</strong>
              <p>{species.average_height}</p>
              <strong>Designation</strong>
              <p>{species.designation}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
