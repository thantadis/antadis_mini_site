import React from "react";
import basket from "../../assets/images/basket.png";
import "./Button.css";
const Button = ({title,withIcon = false}) => {
    return (
        <>
            <button className="btn btn--black" type="button">
                {withIcon && <img src={basket} alt="icon basket" />} 
                <span>{title}</span>
            </button>
        </>
    )
}
export default Button;