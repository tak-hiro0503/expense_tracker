import React, { useState } from "react";
import "./ExpenseFiler.css";

function ExpenseFiler(props) {
  function handleChange(e) {
    props.onChosenYear(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label></label>
        <select value={props.selected} onChange={handleChange} name="years" id="years">
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFiler;
