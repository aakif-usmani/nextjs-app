import React, { useState } from "react";
import Card from "../UI/Card";
import ButtonX from "./Button";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // console.log("ExpenseItem evaluated by react" + props.title);
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated!!!!!");
    // console.log(props.title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">Rs={props.amount}/-</div>
        </div>
        <ButtonX clickHandler={clickHandler} />
      </Card>
    </li>
  );
};

export default ExpenseItem;