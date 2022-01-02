import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Car insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { title: "expense 2", amount: 291, date: new Date(2021, 2, 28) },
  { title: "expense 3", amount: 180, date: new Date(2021, 2, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
