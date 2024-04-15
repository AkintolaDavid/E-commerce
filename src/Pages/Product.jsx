import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/Breadcrum/Breadcrum";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Description } from "../Components/Description/Description";
import { RelatedProduct } from "../Components/RelatedProduct/RelatedProduct";
export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct />
    </div>
  );
};
