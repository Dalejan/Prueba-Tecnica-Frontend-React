import React, { Component } from "react";
import "./style.scss";

//Rutas
import { BrowserRouter } from "react-router-dom";
import appRoutes from "./routes/app";
import AppRouter from "./AppRouter";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppRouter routes={appRoutes} />
      </BrowserRouter>
    );
  }
}

export default App;
