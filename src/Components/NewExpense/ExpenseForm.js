import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Multi-State
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //const [userInput, setUserInput] = useState({
  //  // Single state with object as a argument
  //  enteredTitle: "",
  //  enteredAmount: "",
  //  enteredDate: "",
  //});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({    //This is not good practice to update the state from previous state, therefore
    //  ...userInput,   // use arrow function syntax below
    //  enteredTitle: event.target.value,
    //});
    // Use below syntax to update new state from previous state
    //setUserInput((prevState) => {
    //  return { ...prevState, enteredTitle: event.target.value };
    //});
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({    //This is not good practice to update the state from previous state, therefore
    //  ...userInput,   // use arrow function syntax below
    //  enteredAmount: event.target.value,
    //});
    // Use below syntax to update new state from previous state
    //setUserInput((prevState) => {
    //  return { ...prevState, enteredAmount: event.target.value };
    //});
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({    //This is not good practice to update the state from previous state, therefore
    //  ...userInput,   // use arrow function syntax below
    //  enteredDate: event.target.value,
    //});
    // Use below syntax to update new state from previous state
    //setUserInput((prevState) => {
    //  return { ...prevState, enteredDate: event.target.value };
    //});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveEnteredExpenseData(expenseDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
