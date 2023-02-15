import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (recievedExpenseData) => {
       const expenseData = {
        ...recievedExpenseData,
        id: Math.random().toString()
       }
        props.onSaveExpenses(expenseData)
    }

   

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;