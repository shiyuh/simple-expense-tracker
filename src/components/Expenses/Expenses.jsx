import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.scss";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const selectFilterHandler = (year) => {
    console.log(year);
    setFilteredYear(year);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectFilter={selectFilterHandler} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>

  );
}

export default Expenses;
