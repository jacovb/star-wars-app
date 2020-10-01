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
              <strong>Model</strong>
              <p>{starships.model}</p>
              <strong>Length</strong>
              <p>{starships.length}</p>
              <strong>Passengers</strong>
              <p>{starships.passengers}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
