import React from 'react';

export default function Planets({ data }) {
  return (
    <>
      <h1>Planets</h1>
      <div id="itemContainer">
        {data.map((planets, i) => {
          return (
            <div id="item" key={i}>
              <h3>{planets.name}</h3>
              <strong>Climate</strong>
              <p>{planets.climate}</p>
              <strong>Diameter</strong>
              <p>{planets.diameter}</p>
              <strong>Population</strong>
              <p>{planets.population}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
