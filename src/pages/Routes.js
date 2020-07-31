import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//import PrivateRoute from "./components/Routes/PrivateRoute";

import Login from "./Login"
import Main from "./Main"



class Routes extends Component {

  render() {

    return (
      <BrowserRouter>
        <Switch >
          <Route exact path="/" component={() => <h1> Página Inicial </h1>} />
          <Route path="/login"  component={Login}></Route>
          <Route path="/main"  component={Main}></Route>
          <Route  component={() => <h1> 404 Pagina não encontrada </h1> } />
        </Switch>
      </BrowserRouter>
    )
  }

}


export default Routes;