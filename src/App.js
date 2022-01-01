import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "expense 2", amount: 291, date: new Date(2021, 2, 28) },
    { title: "expense 3", amount: 180, date: new Date(2021, 2, 28) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
