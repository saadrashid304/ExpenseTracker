import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item__date">
      <h4>{month}</h4>
      <p>{year}</p>
      <h2>{day}</h2>
    </div>
  );
};

export default ExpenseDate;
