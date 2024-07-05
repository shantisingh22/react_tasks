import React from 'react';
const StaticMenuItem = () => {
  return (
    <div className="menu-item">
      <h2>Static Menu Iteam</h2>
      <p className="name"><strong>Name: </strong>Chhola puri</p>
      <p className="price"><strong>Price: </strong>200</p>
      <p className="description"><strong>Description: </strong> A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
    </div>
  );
}
export default StaticMenuItem;




//(a)Create a new React component named MenuItem. Hardcode details about a specific menu item, such as its name, price, and a brief description.

//(b)Update the MenuItem component to accept props like name, price, and description. 
//Replace the hardcoded information with props values in the JSX returned by the component. 
//From a parent component (like App.js), pass various menu item details to the MenuItem to ensure it renders the new data correctly.

//(c)In the parent component, define an array containing multiple menu item objects, 
//each with name, price, and description. Utilize the .map() method to iterate over the array and render a MenuItem component for each object, 
//passing the menu data as props.

