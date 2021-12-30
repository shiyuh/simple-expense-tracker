import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.scss";

function Expenses(props) {
  return (
    <Card className="expenses">
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
  );
}

export default Expenses;
