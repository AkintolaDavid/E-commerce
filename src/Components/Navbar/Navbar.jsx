import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
export default function Navbar() {
  const [menu, setmenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav_menu">
        <li
          onClick={() => {
            setmenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>{" "}
          {menu === "shop" && <hr />}
        </li>
        <li
          onClick={() => {
            setmenu("men");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men
          </Link>{" "}
          {menu === "men" && <hr />}
        </li>
        <li
          onClick={() => {
            setmenu("women");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women
          </Link>{" "}
          {menu === "women" && <hr />}
        </li>
        <li
          onClick={() => {
            setmenu("kid");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kid" && <hr />}
        </li>
      </ul>
      <div className="nav_login">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>
        <div className="nav_cart_counter">{getTotalCartItem()}</div>
      </div>
    </div>
  );
}
