import React from 'react';
import logo from "./Images/logo.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <div className="header">
        <img src={logo} class="img-fluid" alt="logo" />
            <h1>Idea Keep</h1>
        </div>
    )
}

export default Header;
