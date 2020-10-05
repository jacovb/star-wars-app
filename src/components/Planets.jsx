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
              <p>Climate: {planets.climate}</p>
              <p>Diameter: {planets.diameter}</p>
              <p>Population: {planets.population}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
