import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const titleChangHandler = () => {
    setTitle("Updated!");
  };
  const [title, setTitle] = useState(props.expense.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.expense.amount}</div>
        </div>
        <button onClick={titleChangHandler}>Change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
