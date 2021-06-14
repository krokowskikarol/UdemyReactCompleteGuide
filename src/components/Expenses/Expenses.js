import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterExpenseYear, setFilterExpenseYear] = useState("");

  const filterExpenses = (year) => {
    console.log("expenses-filter: " + year);
    setFilterExpenseYear(year);
  };
  return (
    <div>
      <ExpensesFilter onFilterExpenses={filterExpenses} />
      <Card className="expenses">
        {props.items.map((el) => (
          <ExpenseItem expense={el} key={el.id} />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
