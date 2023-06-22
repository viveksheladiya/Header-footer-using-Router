import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();
  const { product } = useContext(ProductContext);
  const products = product.find((item) => {
    return item.id === parseInt(id);
  });
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center gap-3 items-center">
        <div>
          <img src={products.image} alt="product" className="w-32" />
        </div>
        <div className="flex flex-col text-center gap-3">
          <span className="text-2xl uppercase">{products.category}</span>
          <span className="text-danger font-bold">{products.title}</span>
          <span className="font-sm">{products.description}</span>
          <span className="text-xl">{products.price}</span>
        </div>
      </div>
    </div>
  );
};
