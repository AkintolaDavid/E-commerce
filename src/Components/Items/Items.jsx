import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";
export const Items = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          style={{ width: "320px" }}
          onClick={window.scrollTo(0, 0)}
        />{" "}
      </Link>
      <p>{props.name}</p>
      <div className="item_prices">
        <div className="item_new_prices">{props.new_price}</div>
        <div className="item_old_prices">{props.old_price}</div>
      </div>
    </div>
  );
};
