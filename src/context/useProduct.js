import {useContext} from "react";
import {ProductContext} from "./ProductContext";
export const useProduct = () => {
    const value = useContext(ProductContext);
    return value;
};