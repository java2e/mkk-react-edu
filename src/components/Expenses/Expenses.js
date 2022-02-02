import React,{useState} from "react";

import Card from "../UI/Card";

import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear,setFilteredYear] = useState('2021');  // hooks 


    const filteredChangeFilter = (value) => {
        debugger
        setFilteredYear(value)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeFilter} />
                <ExpensesList items={props.items} />
            </Card>
        </div>
    )
}

export default Expenses;

