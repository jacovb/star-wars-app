import React from 'react';

export default function Starships({ data }) {
  return (
    <>
      <h1>Starships</h1>
      <div id="itemContainer">
        {data.map((starships, i) => {
          return (
            <div id="item" key={i}>
              <h3>{starships.name}</h3>
              <p>Model: {starships.model}</p>
              <p>Length: {starships.length}</p>
              <p>Passengers: {starships.passengers}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
