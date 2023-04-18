import React from 'react';
import "./PrincipalPage.css"

export const Producto = ({name, description, price, image, stock}) => {
  return (
    <div className="product">
      <div className="product-details">
        <img className="product-image" src={image} alt={name} />
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="product-button">Add to cart</button>
      </div>
    </div>
  );
};

