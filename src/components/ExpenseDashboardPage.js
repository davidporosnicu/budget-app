import React, { Component } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

class ExpenseDashboardPage extends Component {
  render() {
    return (
      <div>
        <ExpenseListFilter />
        <ExpenseList />
      </div>
    );
  }
}

export default ExpenseDashboardPage;
