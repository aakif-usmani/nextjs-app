import React from "react";
import { useState } from "react/cjs/react.development";
import Expenses from "../Components/CourseProject/Expenses/Expenses";
import NewExopense from "../Components/CourseProject/NewExpenses/NewExpense";

const DUMMY_ESPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_ESPENSES);
  const addExpensehandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExopense onAddExpense={addExpensehandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;