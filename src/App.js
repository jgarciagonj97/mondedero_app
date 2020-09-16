import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import Monedero from "./components/Monedero/Monedero";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/monedero" component={Monedero} />
        <Route />
      </Switch>
    </>
  );
}

export default App;
