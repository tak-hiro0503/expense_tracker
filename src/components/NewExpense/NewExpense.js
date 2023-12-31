import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false)
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      
    };
    stopEditingHandler()
    props.onAddExpense(expenseData);
  }

  const startEditingHandler = () =>{
    setIsEditing(true);
  }

  const stopEditingHandler = () =>{
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onEdit={stopEditingHandler}/>}
    </div>
  );
}

export default NewExpense;
