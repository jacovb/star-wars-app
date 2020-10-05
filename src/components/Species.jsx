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
              <p>Language: {species.language}</p>
              <p>Height: {species.average_height}</p>
              <p>Designation: {species.designation}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
