import React, { useContext } from "react";
import "./ShopCategoty.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Components/Assets/dropdown_icon.png";
import { Items } from "../Components/Items/Items";
export const ShopCategoty = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop_category">
      <img className="shop_category_banner" src={props.banner} />
      <div className="shopcategoryindex">
        <p>
          <span>showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategorysort">
          sort by <img src={dropdown} />
        </div>
      </div>

      <div className="shopcategory_products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else return null;
        })}
      </div>
      <div className="shop_category_loadmore">LOAD MORE</div>
    </div>
  );
};
