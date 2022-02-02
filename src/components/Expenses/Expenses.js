import Card from "../UI/Card";

import './Expenses.css';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    return (
        <div>
            <Card className="expenses">

                <ExpensesList items={props.items} />
            </Card>
        </div>
    )
}

export default Expenses;

