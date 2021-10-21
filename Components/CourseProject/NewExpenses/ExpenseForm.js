import React, { useState } from "react";
import "./";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showHide, setShowHide] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  const showHideForm = () => {
    setShowHide(!showHide);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {showHide === false ? (
          <div>
            <button onClick={showHideForm}>add new expense</button>
          </div>
        ) : (
          <div className="new-expense__controls">
            <div className="new-expense__controls">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__controls">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__controls">
              <label>Date</label>
              <input
                type="date"
                min="2020-01-01"
                max="2023-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
            <div className="new-expense__actions">
              <button type="submit" onClick={showHideForm}>
                Cancel
              </button>
            </div>
            <div className="new-expense__actions">
              <button type="submit">New Expense</button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;
