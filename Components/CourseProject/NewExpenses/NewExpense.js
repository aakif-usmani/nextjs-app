import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExopense = (props) => {
  const onSaveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDatahandler} />
    </div>
  );
};

export default NewExopense;