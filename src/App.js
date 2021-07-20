import { useState } from "react";
import Expenses from "./components/Expneses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      date: new Date(2020, 2, 21),
      title: "Insurance",
      price: 250,
    },
    {
      id: 'e2',
      date: new Date(2020, 9, 12),
      title: "Health checkup",
      price: 250,
    },
    {
      id: 'e3',
      date: new Date(2021, 2, 9),
      title: "Rent",
      price: 250,
    },
    {
      id: 'e4',
      date: new Date(2021, 5, 13),
      title: "Internet",
      price: 250,
    },
    {
      id: 'e5',
      date: new Date(2019, 2, 9),
      title: "def",
      price: 250,
    },
    {
      id: 'e6',
      date: new Date(2019, 5, 13),
      title: "xyz",
      price: 250,
    },
    {
      id: 'e7',
      date: new Date(2022, 2, 9),
      title: "pqr",
      price: 250,
    },
    {
      id: 'e8',
      date: new Date(2022, 5, 13),
      title: "abc",
      price: 250,
    },
  ]);
  const addExpenseHandler = (data) => {
    setExpenses((prevState) => {
      return ([ data, ...prevState]);
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
