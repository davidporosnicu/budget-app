import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";

class AddExpensePage extends Component {
  render() {
    return (
      <div>
        <h2>Add a new expense</h2>
        <ExpenseForm />
      </div>
    );
  }
}

export default AddExpensePage;
