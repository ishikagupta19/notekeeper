import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="position-fixed flex-row justify-content-between align-items-center">
            <p> Copyright © {year}</p>
        </footer>
    )
}

export default Footer;