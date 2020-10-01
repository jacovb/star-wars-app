import React from 'react';

export default function Vehicles({ data }) {
  return (
    <>
      <h1>Vehicles</h1>
      <div id="itemContainer">
        {data.map((vehicles, i) => {
          return (
            <div id="item" key={i}>
              <h3>{vehicles.name}</h3>
              <strong>Model</strong>
              <p>{vehicles.model}</p>
              <strong>Length</strong>
              <p>{vehicles.length}</p>
              <strong>Passengers</strong>
              <p>{vehicles.passengers}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
