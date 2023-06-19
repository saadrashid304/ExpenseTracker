import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

// Conditional Return Statement
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">No Expense Found!</h2>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
