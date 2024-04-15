import React from "react";
import breadcrum_arrow from "../Assets/breadcrum_arrow.png";
import "./Breadcrum.css";
export const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={breadcrum_arrow} /> SHOP <img src={breadcrum_arrow} />
      {product.category}
      <img src={breadcrum_arrow} />
      {product.name}
    </div>
  );
};
