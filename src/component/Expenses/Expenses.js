import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem"
import './Expenses.css';
import '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';



const Expenses = (props) => {
    const [filteredyear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedyear => {
        setFilteredYear(selectedyear)
        // console.log('Expenses.js');
        // console.log(selectedyear);
    };


    return
    <div>

        <Card className="expenses">
            <ExpensesFilter selected={filteredyear} onChangeFilter={filterChangeHandler} />
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />))}


        </Card>

    </div>

}
export default Expenses;
