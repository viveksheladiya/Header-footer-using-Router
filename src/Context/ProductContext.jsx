import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
    const [product,setProduct] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    };
    fetchdata();
  }, []);
  return (
    <ProductContext.Provider value={{product}}>
      {children}
    </ProductContext.Provider>
  );
};
