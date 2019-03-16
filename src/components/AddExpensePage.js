import React, { Component } from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

class AddExpensePage extends Component {
  render() {
    return (
      <div>
        <h2>Add a new expense</h2>
        <ExpenseForm
          onSubmit={expense => {
            this.props.dispatch(addExpense(expense));
            this.props.history.push("/");
          }}
        />
      </div>
    );
  }
}

export default connect()(AddExpensePage);
