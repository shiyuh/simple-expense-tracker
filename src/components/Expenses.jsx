import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss"

function Expenses(props) {
    return (
        <div className="expenses">
            {
                props.expenses.map(function(expense) {
                    return <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />
                })
            }
        </div>
    )
}

export default Expenses;

