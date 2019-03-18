import React, { Component } from "react";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import { removeExpense } from "../actions/expenses";

class EditExpensePage extends Component {
  render() {
    const id = this.props.match.params.id;

    return (
      <div>
        <p>Editing the expense with id of {this.props.match.params.id}</p>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={expense => {
            this.props.dispatch(
              editExpense(this.props.match.params.id, expense)
            );
            this.props.history.push("/");
          }}
        />
        <button
          onClick={() => {
            this.props.dispatch(removeExpense({ id }));
            this.props.history.push("/");
          }}
        >
          Remove Expense
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
