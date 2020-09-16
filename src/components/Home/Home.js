import React, { useState } from "react";
import "./styles.css";

const HomePage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setEmail("");
        setPassword("");
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className="titulo">
                    <h3>LOG-IN</h3>
                </div>
                <form className="formulario" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Escribe tu email" className="form-control email"
                        value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder="Password" className="form-control pass"
                        value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </form>
            </div>
        </div >
    );
};

export default HomePage;