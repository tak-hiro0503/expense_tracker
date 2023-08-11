import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  function userInputChangeHandler(identifier, value) {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "amount") {
      setAmount(value);
    } else {
      setDate(value);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    const expenseData = {
      title: title,
      date: new Date(date),
      amount: +amount,
    };
    props.onSaveExpenseData(expenseData);
    setDate("");
    setTitle("");
    setAmount("");
  }
  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={title}
            type="text"
            onChange={(event) =>
              userInputChangeHandler("title", event.target.value)
            }
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) =>
              userInputChangeHandler("amount", event.target.value)
            }

           
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2019-01-01"
            step="2024-01-01"
            onChange={(event) =>
              userInputChangeHandler("date", event.target.value)
            }
          />
        </div>
      </div>

      <div className="new-expense__actions">
      <button type="button" onClick={props.onEdit}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
