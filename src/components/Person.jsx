import React from 'react';
import { useParams } from 'react-router-dom';

export default function Person({ data }) {
  const { person } = useParams();
  const personProfile = data.find(({ name }) => name === person);
  console.log('render :', personProfile);

  if (personProfile) {
    return (
      <div id="itemPerson">
        <h3>{personProfile.name}</h3>

        <p>
          <strong>Gender: </strong>
          {personProfile.gender}
        </p>
        <p>
          <strong>Birth Year: </strong>
          {personProfile.birth_year}
        </p>
        <p>
          <strong>Eye Color: </strong>
          {personProfile.eye_color}
        </p>
        <p>
          <strong>Height: </strong>
          {personProfile.height}
        </p>
        <p>
          <strong>Mass: </strong>
          {personProfile.mass}
        </p>
        <p>
          <strong>Hair Color: </strong>
          {personProfile.hair_color}
        </p>
        <p>
          <strong>Home World: </strong>
          {personProfile.homeworld}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
