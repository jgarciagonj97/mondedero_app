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
        document.body.classList.remove("background_home");
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
                <div className="card shadow p-3 mb-2 bg-white rounded">
                    <div className="card-body">
                        <div>
                            <h3>Saldo disponible: </h3>
                        </div>
                        <div>
                            <h4>XXX</h4>
                        </div>
                        <form className="formulario">
                            <input type="text" placeholder="Inserta importe a enviar..." className="form-control email"
                            />
                            <button type="submit" className="btn btn-success boton">Enviar</button>
                        </form>
                    </div>
                </div >
            </div>
            <div className="movimientos">
                <div className="card shadow p-3 mb-2 bg-white rounded">
                    <div className="card-body saldo_body">
                        <div className="saldo_recibido">
                            <h3>Saldo recibido: </h3>
                        </div>
                        <div className="saldo_total">
                            <h4>XXX</h4>
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
}


export default Monedero;