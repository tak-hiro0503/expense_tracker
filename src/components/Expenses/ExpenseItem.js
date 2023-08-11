import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [state, setState] = useState(props.title)


  function handleClick(){
    setState("Updated")

  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} month={props.month} year={props.year} />
      <div className="expense-item__description">
        <h2>{state}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
