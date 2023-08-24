import React from "react";
import { productData } from "../common/data";
import { Card } from "./Card";

export const HomePage = () => {
  return (
    <div className="main-container">
      {productData.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
