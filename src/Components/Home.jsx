import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Product } from "./Product";

export default function Home() {
  const { product } = useContext(ProductContext);
  return (
    <div className="w-full h-full">
      <div className="container flex flex-col justify-center items-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {product.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
