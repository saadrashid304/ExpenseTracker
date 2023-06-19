import React, { useState } from "react";
import Card from "../UI/Card";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddExpense, setIsAddExpense] = useState(false);

  const saveEnteredExpenseDataHandler = (enteredExpenseData) => {
    let i = 1;
    const expenseData = {
      ...enteredExpenseData,
      id: i.toString(),
    };
    props.OnFormSubmission(expenseData);
  };

  const startAddExpenseHandler = () => {
    setIsAddExpense(true);
  };

  const stopAddExpenseHandler = () => {
    setIsAddExpense(false);
  };

  return (
    <Card className="new-expense">
      {!isAddExpense && (
        <button onClick={startAddExpenseHandler}>Add New Expense</button>
      )}
      {isAddExpense && (
        <ExpenseForm
          onSaveEnteredExpenseData={saveEnteredExpenseDataHandler}
          onCancel={stopAddExpenseHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
