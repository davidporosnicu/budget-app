import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";
test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

//should add an expense
test("should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "4",
      description: "Watch",
      note: "",
      amount: 17500,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses.concat(action.expense));
});
//should edit and expense
test("should edit and expense", () => {
  const description = "Cable";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: { description }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe("Cable");
});

//should not edit expense if expense not found
test("should not edit expense if expense not found", () => {
  const description = "Cable";
  const action = {
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { description }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(state);
});
