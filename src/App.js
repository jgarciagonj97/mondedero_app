import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Monedero from "./components/Monedero/Monedero";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/monedero" component={Monedero} />
        {/* Aquí voy a hacer el redirigir a Home si no tenemos token el localStorage (if(no hay objeto){Redirect to="/"} */}
        <Redirect from="**" to="/" />
      </Switch>
    </>
  );
}

export default App;
