import React from "react";
import "./RelatedProduct.css";
import data_product from "../Assets/data";
import { Items } from "../Items/Items";
export const RelatedProduct = () => {
  return (
    <div className="RelatedProduct">
      <h1>Related Products</h1>
      <hr />
      <div className="RelatedProduct_items">
        {data_product.map((item, i) => {
          return (
            <Items
              id={item.id}
              key={i}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
