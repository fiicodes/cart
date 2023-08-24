import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../common/main.css";
export const Card = ({ product }) => {
  const navigateTo = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleNavigation = () => {
    if (isClicked) {
      navigateTo("overview", {
        state: {
          product,
        },
      });
    }
    setIsClicked(true);
  };

  const buttonStyles = {
    "--button-background": isClicked ? "#009688" : "#fff",
    "--button-color": isClicked ? "#fff" : "#ff5722",
    "--button-hover-background": isClicked ? "#009688" : "#ff5722",
    "--button-hover-color": isClicked ? "#ff5722" : "#fff",
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-content">
        <h2>{product.title}</h2>
        <span className="product-price">${product.price}</span>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
        <button style={buttonStyles} onClick={handleNavigation}>
          {isClicked ? "Go To Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};
