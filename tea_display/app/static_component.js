import React from 'react';
import './tea_display.css';
const StaticDisplay = () => {
  return (
    <div>
      <h1>Static Data</h1>
      <p className="origin1"><strong>origin:</strong> Darjeeling, India</p>
      <p className="discription1"><strong>Description:</strong> Darjeeling tea is often referred to as the "Champagne" of Teas.</p>
    </div>
  );
}
export default StaticDisplay;



//(a) Basic Static Component: Create a new React component named TeaDisplay. In the component, hardcode details about a specific type of tea, such as its name, origin, and description.
//(b) Dynamic Component: Update the TeaDisplay component to accept props like name, origin, 
//and description. Replace the hardcoded data in the component with the props values. From a parent component (e.g., App.js), 
//pass different sets of tea data to TeaDisplay to ensure it updates correctly.
//(c)In your parent component, create an array of tea objects, each containing name, origin, and description. Use the .
//map() JavaScript method to iterate over the array and render a TeaDisplay component for each tea object, passing the tea data as props.

