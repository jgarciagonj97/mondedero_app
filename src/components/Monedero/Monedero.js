import React from "react";
import "./styles.css";
import { useHistory, useState } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

// componentDidMount(){
//     const logeado = localStorage.getItem('token');
//     if (!logeado) {
//         useHistory().push("/");
//     }
// };

const Monedero = () => {

    const logeado = window.localStorage.getItem('token');
    const history = useHistory();
    if (!logeado) {
        history.push("/");
    }

    return (
        <>
            <Navbar />
            <div className="monedero">

            </div>
        </>
    );
}


export default Monedero;