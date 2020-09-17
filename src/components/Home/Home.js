import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const HomePage = () => {

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

    const history = useHistory();
    function handleSubmit(e) {
        e.preventDefault();
        setEmail("");
        setPassword("");
        localStorage.setItem("token", `${email}: ${password}`);
        history.push("/monedero");
    };

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
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
        </div >
    );
};

export default HomePage;