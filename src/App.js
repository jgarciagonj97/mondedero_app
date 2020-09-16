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
        <Redirect from="**" to="/" />
      </Switch>
    </>
  );
}

export default App;
