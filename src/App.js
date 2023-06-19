import Expenses from "./Components/ExpenseInformation/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React, { useState } from "react";

const dummyExpenses = [
  {
    id: "e1",
    date: new Date(2019, 8, 7),
    title: "Books",
    amount: 250,
  },
  {
    id: "e2",
    date: new Date(2019, 5, 10),
    title: "Table",
    amount: 199.99,
  },
  {
    id: "e3",
    date: new Date(2021, 2, 23),
    title: "Bed Sheets",
    amount: 500.99,
  },
  {
    id: "e4",
    date: new Date(2020, 11, 25),
    title: "Chirstmas Tree",
    amount: 1000,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const formSubmissionHandler = (formExpenseData) => {
    setExpenses((prevExpenses) => {
      return [formExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense OnFormSubmission={formSubmissionHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
