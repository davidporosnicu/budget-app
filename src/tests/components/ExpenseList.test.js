import React from "react";
import { shallow } from "enzyme";
import { ExpensesList } from "../../components/ExpensesList";
import expenses from "../fixtures/expenses";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

test("should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render ExpenseList with empty message", () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
