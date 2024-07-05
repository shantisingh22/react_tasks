import React from 'react';
import './tea_display.css';
const TeaDisplay = ({ name, origin, description }) => {
  return (
    <div className="container">
      <h1>Dynamic Data</h1>
      <p className="name"><strong>Name: </strong>{name}</p>
      <p className="origin"><strong>Origin: </strong>{origin}</p>
      <p className="description"><strong>Description: </strong>{description}</p>
    </div>
  );
};
export default TeaDisplay;

