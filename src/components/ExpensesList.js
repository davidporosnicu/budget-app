import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import ExpenseListFilter from "./ExpenseListFilter";

const ExpensesList = props => {
  const { expenses } = props;
  return (
    <div>
      <h3>Expenses List</h3>
      <ExpenseListFilter />

      {expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesList);
