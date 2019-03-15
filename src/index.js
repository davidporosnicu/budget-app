import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import "./styles/base/_base.scss";

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" exact activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>
  );
};

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route path="/create" />
        <Route path="/edit" />
        <Route path="/help" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.querySelector("#root"));
