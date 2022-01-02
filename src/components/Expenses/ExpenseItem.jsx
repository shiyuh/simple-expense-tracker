import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <div>
            {" "}
            <h2> {props.title} </h2>{" "}
          </div>
          <div className="expense-item__price"> ${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
