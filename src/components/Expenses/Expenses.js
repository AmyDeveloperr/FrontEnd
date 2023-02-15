import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
const Expenses = (props) => {
    return (
        <Card className="expenses">
          {/* //very imp to write below expression into curly braces */}
         { 
            props.items.map((expense) => (
              <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
            ))
         } 
     
    </Card>
    )
}

export default Expenses;