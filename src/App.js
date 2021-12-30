import "./App.css";
import Expenses from "./components/Expenses";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "expense 2", amount: 291, date: new Date(2021, 2, 28) },
    { title: "expense 3", amount: 180, date: new Date(2021, 2, 28) },
  ];

  return (
    <div>
      Expense App
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
