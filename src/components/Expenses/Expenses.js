import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterExpenseYear, setFilterExpenseYear] = useState("2020");

  const filterExpenses = (selectedYear) => {
    setFilterExpenseYear(selectedYear);
  };

  const filteredByYear = props.items.filter((el) => {
    return el.date.getFullYear().toString() === filterExpenseYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterExpenseYear}
        onFilterChange={filterExpenses}
      />
      <ExpensesChart expenses={filteredByYear} />
      <ExpensesList items={filteredByYear} />
    </Card>
  );
};
export default Expenses;
