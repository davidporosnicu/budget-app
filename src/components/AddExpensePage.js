import React, { Component } from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.onSubmit(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h2>Add a new expense</h2>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: expense => dispatch(addExpense(expense))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddExpensePage);
