import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
export const ProductDisplay = (props) => {
  const { addtoCart } = useContext(ShopContext);
  const { product } = props;
  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay_left">
        <div className="ProductDisplay_img_list">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>

        <div className="ProductDisplay_img">
          <img src={product.image} />
        </div>
      </div>

      <div className="ProductDisplay_right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay_right_star">
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_dull_icon} />
          <p>(122)</p>
        </div>

        <div className="ProductDisplay_right_prices">
          <div className="ProductDisplay_right_old">${product.old_price}</div>
          <div className="ProductDisplay_right_new">${product.new_price}</div>
        </div>

        <div className="ProductDisplay_right_description">
          Striped Flutter Sleeve Overlap Collar Peplum Hem Blousesxdfd dcs,
          Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse. Striped
        </div>

        <div className="ProductDisplay_right_size">
          <h2>Select size</h2>
          <div className="ProductDisplay_right_size_category">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button
          onClick={() => {
            addtoCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="ProductDisplay_right_category">
          <span>Category:</span>Women T-Shirt eccentric fabric
        </p>
        <p className="ProductDisplay_right_tag">
          <span>Tag:</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};
