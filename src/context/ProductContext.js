import React, { createContext, useEffect, useState } from "react";
import { FetchProduct } from "../services/productService";

export const ProductContext = createContext({});

const ProductContextProvider = ({ children }) => {
        const [products, setProducts] = useState([]);
        
        useEffect(() => {
            FetchProduct().then(data => setProducts(data));
        }, []);

        return ( 
            <ProductContext.Provider value = {{products}}> 
                { children } 
            </ProductContext.Provider>);
        };

export default ProductContextProvider;