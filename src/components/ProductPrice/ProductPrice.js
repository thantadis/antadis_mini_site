import React from "react";
import "./ProductPrice.css";
const ProductPrice = ({prices}) => {
    return (
        <div className="product_price">
            <div className="current_price">
                <span>{prices.current_price.toFixed(2)} {prices.currency}</span>
            </div>
            <div className="old_price">
                <span>au lieu de </span><span>{prices.old_price} {prices.currency}</span>
            </div>
        </div>
    )
}
export default ProductPrice;