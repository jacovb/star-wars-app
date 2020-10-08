import React from 'react';
import { Link } from 'react-router-dom';

export default function People({ data }) {
  return (
    <>
      <h1>Characters</h1>
      <div id="itemContainer">
        {data.map((people, i) => {
          return (
            <div id="item" key={i}>
              <Link to={`/people/${people.name}`}>
                <h3>{people.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
