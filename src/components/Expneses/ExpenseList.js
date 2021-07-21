import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <p className="expense-list__empty"> No expenses found</p>
      </div>
    );
  }
  return (
    <div>
      {props.items.map((expense) => 
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      )}
    </div>
  );
};

export default ExpenseList;
