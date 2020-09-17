import React, { useEffect } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

// componentDidMount(){
//     const logeado = localStorage.getItem('token');
//     if (!logeado) {
//         useHistory().push("/");
//     }
// };

const Monedero = () => {

    useEffect(() => {
        document.body.classList.add("background");
    });

    const logeado = window.localStorage.getItem('token');
    const history = useHistory();
    if (!logeado) {
        history.push("/");
    }

    return (
        <>
            <Navbar />
            <div className="monedero">
                safa
            </div>
        </>
    );
}


export default Monedero;