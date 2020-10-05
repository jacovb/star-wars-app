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
              <p>Model: {vehicles.model}</p>
              <p>Length: {vehicles.length}</p>
              <p>Passengers: {vehicles.passengers}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
