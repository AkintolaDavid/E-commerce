import React from "react";
import "./Newcollection.css";
import newcollection from "../Assets/new_collections";

import { Items } from "../Items/Items";
export const Newcollection = () => {
  return (
    <div className="newcollection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newcollection.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};
