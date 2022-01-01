import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.scss'

const ExpenseItem = (props) => {
    // react hooks must be called directly inside a component function
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated'); // schedules value update
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <div> <h2> {title} </h2> </div>
                <div className="expense-item__price"> ${props.amount}</div>
            </div>
            <button onClick={clickHandler}> Change title </button>
        </Card>
    );
}

export default ExpenseItem;