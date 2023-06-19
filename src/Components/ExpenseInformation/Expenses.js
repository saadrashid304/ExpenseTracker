import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //let expensesContent = <p color="white">No Expense Found!</p>;
  //if (filteredExpenses.length > 0) {
  //  expensesContent = filteredExpenses.map((expense) => (
  //    <ExpenseItem
  //      key={expense.id}
  //      date={expense.date}
  //      title={expense.title}
  //      amount={expense.amount}
  //    />
  //  ));
  //}

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
