import React from "react";
import { NavLink } from "react-router-dom";

export const Product = ({ product }) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center text-center mt-10">
        <div key={product.id} className="flex flex-col justify-center items-center">
          <NavLink to={`/product/${product.id}`}>
            <img src={product.image} alt="products-img" className="w-36 h-36" />
          </NavLink>
          <div className="mt-10">
            <div className="flex flex-col">
              <span className="text-lg">{product.title}</span>
              <span className="text-2xl font-bold">{product.category}</span>
              <span className="font-bold text-green-700">&#8377;{product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
