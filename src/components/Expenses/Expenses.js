import React,{useState} from "react";

import Card from "../UI/Card";

import './Expenses.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear,setFilteredYear] = useState('2021');  // hooks 


    const filteredChangeFilter = (value) => {
        debugger
        setFilteredYear(value)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeFilter} />
                <ExpensesChart expenses = {filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;

