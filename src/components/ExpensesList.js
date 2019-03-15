import React from "react";
import { connect } from "react-redux";

const ExpensesList = props => {
  return (
    <div>
      <h3>Expenses List</h3>
      {props.expenses.length}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpensesList);
