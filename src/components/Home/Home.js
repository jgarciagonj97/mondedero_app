import React from "react";
import "./styles.css";

const HomePage = () => {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="titulo">
                    <h3>LOG-IN</h3>
                </div>
                <form className="formulario" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Escribe tu email" className="form-control email" />
                    <input type="password" placeholder="Password" className="form-control pass" />
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </form>
            </div>
        </div >
    );
};

export default HomePage;