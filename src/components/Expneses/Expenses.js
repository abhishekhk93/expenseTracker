import { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React from "react";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [selectedYear, setSelectedYear] = useState("2019");
  const onFilterHandler = (data) => {
    setSelectedYear(data);
  };
  let filteredArr = expenses;
  if(! (selectedYear === 'All')){
    filteredArr = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );
  }
  
  return (
    <div>
      <Card class="expenses">
        <ExpensesFilter selected={selectedYear} onFilter={onFilterHandler} />
        <ExpenseList items={filteredArr}/>
      </Card>
    </div>
  );
};

export default Expenses;
