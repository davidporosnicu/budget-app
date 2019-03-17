import React, { Component } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilter from "./ExpenseListFilter";

class ExpenseDashboardPage extends Component {
  render() {
    return (
      <div>
        <ExpenseListFilter />
        <ExpensesList />
      </div>
    );
  }
}

export default ExpenseDashboardPage;
