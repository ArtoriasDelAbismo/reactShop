import React, {useState, useEffect} from "react";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const productList = async () => {
        const response = await fetch(API);
        const products = await response.json();
        setProducts(products);
      };
      productList();
    }, []);//El llamado al segundo argumento hace que la funcionalidad dentro de useEffect funcione sólo una vez en el primer renderizado

    return products;
};

export default useGetProducts;


