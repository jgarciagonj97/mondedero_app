import React, { useEffect } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { connect, useSelector } from "react-redux";
import { MANDAR_DINERO } from "../../redux/actions/actions";


const Monedero = ({ disponible, enviado, enviarDinero }) => {

    useEffect(() => {
        document.body.classList.remove("background_home");
        document.body.classList.add("background");
    });

    //Redirige a la página Home (para hacer el login) si no encuentra el token en el localStorage
    const logeado = window.localStorage.getItem('token');
    const history = useHistory();
    if (!logeado) {
        history.push("/");
    }

    var enviar = 0;
    const handleChange = e => {
        enviar = e.target.value;
        console.log(enviar);
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row col-12">

                    <div className="card shadow p-3 mb-2 bg-white rounded col-12 col-md-5 col-sm-6 col-lg-4 carta">
                        <div className="card-body">
                            <div>
                                <h3>Saldo disponible: </h3>
                            </div>
                            <div>
                                <h4>{disponible}</h4>
                            </div>
                            <div className="formulario">
                                <input type="number" placeholder="Inserta importe..." className="form-control email" name="dinero"
                                    onChange={e => handleChange(e)} />
                                <button className="btn btn-success boton" onClick={() => enviarDinero(enviar)}>Enviar</button>
                            </div>
                        </div >
                    </div>

                    <div className="card shadow p-3 mb-2 bg-white rounded col-12 col-md-5 col-sm-6 col-lg-4 carta">
                        <div className="card-body saldo_body">
                            <div className="saldo_recibido">
                                <h3>Saldo recibido: </h3>
                            </div>
                            <div className="saldo_total">
                                <h4>{enviado}</h4>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    disponible: state.disponible,
    enviado: state.enviado
});

const mapDispatchToProps = dispatch => ({
    enviarDinero(cantidad) {
        dispatch({
            type: MANDAR_DINERO,
            cantidad
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Monedero);