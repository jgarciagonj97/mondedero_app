import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const HomePage = () => {

    //Al abrir la página, si tenemos el token en el localStorage, nos redirige dentro de la app
    useEffect(() => {
        const logeado = localStorage.getItem('token');
        if (logeado) {
            history.push("/monedero");
        }
        document.body.classList.remove("background");
        document.body.classList.add("background_home");
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Actualiza estado y guarda el token en localStorage (muy simple, sin API, jwt, bcrypt ni nada)
    const history = useHistory();
    function handleSubmit(e) {
        e.preventDefault();
        setEmail("");
        setPassword("");
        localStorage.setItem("token", `${email}: ${password}`);
        history.push("/monedero");
    };

    return (
        <div className="container mt-5">
            <div className="row col-12">
                <div className="card shadow p-3 mb-5 bg-white rounded col-12 col-md-6 col-sm-6 col-lg-4">
                    <div className="card-body">
                        <div className="titulo">
                            <h3>LOG-IN</h3>
                        </div>
                        <form className="formulario" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Escribe tu email" className="form-control email"
                                value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="password" placeholder="Password" className="form-control pass"
                                value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <button type="submit" className="btn btn-primary envio">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePage;