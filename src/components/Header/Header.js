import React from "react";
import logos from "../../assets/images/logo.png";
import "./Header.css";
const Header = () => {
    return (
        <header className="header">
            <img src={logos} alt="logos" title="logos"/>
        </header>
    )
}
export default Header;