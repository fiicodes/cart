import React from "react";
import { useLocation } from "react-router-dom";
import "../common/main.css";
export const OrderOverview = () => {
  const { product } = useLocation().state;
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-body">
          <span>{product.title}</span>
          <h2>$ {product.price}</h2>
          <span>{product.description}</span>
        </div>
        <img src={product.image} alt="product-img" className="product-image" />
      </div>
    </div>
  );
};
