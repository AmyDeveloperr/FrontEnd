import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  { id: "1", date: new Date(2023, 1, 10), title: "Rent", amount: 100 },
  { id: "2", date: new Date(2022, 4, 10), title: "Tourism", amount: 200 },
  { id: "3", date: new Date(2021, 2, 5), title: "Grocery", amount: 300 },
  { id: "4", date: new Date(2020, 8, 17), title: "Petrol", amount: 400 },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const newExpenses = (expenseData) => {

    // const updatedExpense = [expenseData, ...expenses];
    setExpenses(prevExpenses => {
      return [expenseData, ...prevExpenses];
    });

  }

  return (
    <div>
      <NewExpense onSaveExpenses={newExpenses}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
