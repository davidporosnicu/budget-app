import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles/base/_base.scss";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

const store = configureStore();

store.dispatch(addExpense({ description: "water bill", createdAt: 1000 }));
store.dispatch(
  addExpense({ description: "gas bill", amount: 4500, createdAt: 1500 })
);
store.dispatch(addExpense({ description: "rent", amount: 105000 }));
store.dispatch(setTextFilter(""));

// const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#root"));
