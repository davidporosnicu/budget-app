import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" />
      <Route path="/create" />
      <Route path="/edit" />
      <Route path="/help" />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routes, document.querySelector("#root"));
