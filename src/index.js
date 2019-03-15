import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles/base/_base.scss";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense({ description: "water bill" }));
store.dispatch(addExpense({ description: "gas bill" }));
store.dispatch(setTextFilter("bill"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.querySelector("#root"));
