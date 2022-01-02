import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.scss";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const selectFilterHandler = (year) => {
    console.log(year);
    setFilteredYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectFilter={selectFilterHandler} />
        {props.expenses.map(function (expense, i) {
          return (
            <ExpenseItem
              key={i}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          );
        })}
      </Card>
    </div>

  );
}

export default Expenses;
