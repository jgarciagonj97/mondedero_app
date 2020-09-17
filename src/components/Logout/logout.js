import React from "react";
import "./styles.css";
import { useHistory, useState } from "react-router-dom";


const Logout = () => {

    const history = useHistory();
    const handleClick = () => {
        localStorage.removeItem('token');
        history.push("/");
    }

    return (
        <div>
            <button className="btn btn-small btn-primary logout" onClick={handleClick}>
                Logout
            </button>
        </div>
    );
};

export default Logout;