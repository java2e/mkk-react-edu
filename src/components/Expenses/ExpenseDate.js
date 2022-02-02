import React from "react";

import './ExpenseDate.css';

const ExpenseDate = (props) => {

    const month = props.tarih.toLocaleString('en-US', { month: 'long' });
    const day = props.tarih.toLocaleString('en-US', { day: '2-digit' });
    const year = props.tarih.getFullYear();

    return (

        <div className="expense-date">
            <div className="expense-date_month">{month}</div>
            <div className="expense-date_year">{year}</div>
            <div className="expense-date_day">{day}</div>
        </div>


    )
}

export default ExpenseDate;