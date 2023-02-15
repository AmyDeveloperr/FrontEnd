import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const amountHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!enteredTitle || !enteredAmount || !enteredDate) {
        alert('please enter all the values');
        return;
        }
        const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate)
        }

        props.onSaveExpense(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" value={enteredAmount} onChange={amountHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
