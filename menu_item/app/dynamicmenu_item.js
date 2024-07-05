import React from 'react';
import './menu_item.css';

const DynamicMenuItem = ({ name, price, description }) => {
  return (
    <div className="menu-item">
        <h2>Dynamic Menu Item</h2>
        <p className='name'><strong>Name:</strong> {name}</p>
        <p className='price'><strong>Price:</strong> {price}</p>
        <p className='description'><strong>Description:</strong> {description}</p>
    </div>
  );
}
export default DynamicMenuItem;


