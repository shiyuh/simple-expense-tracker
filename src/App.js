import "./App.css";
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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
