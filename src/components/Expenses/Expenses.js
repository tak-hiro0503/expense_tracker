import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFiler from "./ExpenseFiler";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  function onChosenYear(year) {
    setFilteredYear(year);
  }
  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <div>
        <ExpenseFiler selected={filteredYear} onChosenYear={onChosenYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />

      </div>
    </Card>
  );
}

export default Expenses;
