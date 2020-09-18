import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Logout from "../Logout/logout";

const NavBar = () => {
    return (
        <div>
            <nav className="container-fluid contenedor shadow">
                <nav className="container">
                    <Link to="/">
                        <img src="https://media.istockphoto.com/vectors/hands-with-devices-website-virtual-wallet-blockchain-transfer-vector-id993630996?k=6&m=993630996&s=170667a&w=0&h=nStjyRHUPXxRfrKD01MJYXiDBBvgJLujWsbvrVXyMaY=" alt="guidesmiths_logo" className="image" />
                    </Link>
                    <Logout />
                </nav>
            </nav>
        </div>
    );
};

export default NavBar;