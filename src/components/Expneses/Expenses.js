import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

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
  
  let expressContent = <p className="empty_card"> No expenses found </p>;
  if(filteredArr.length > 0){
    expressContent =   filteredArr.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    ));
  }
  return (
    <div>
      <Card class="expenses">
        <ExpensesFilter selected={selectedYear} onFilter={onFilterHandler} />
        {expressContent}
      </Card>
    </div>
  );
};

export default Expenses;
