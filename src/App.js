
import Expenses from './components/Expenses/Expenses';


const App = () => {
 
  const expenses = [
    {id: '1', date: new Date(2023, 1, 10), title: 'Rent', amount: 100 },
    {id: '1', date: new Date(2022, 4, 10), title: 'Tourism', amount: 200 },
    {id: '1', date: new Date(2021, 2, 5), title: 'Grocery', amount: 300 },
    {id: '1', date: new Date(2020, 8, 17), title: 'Petrol', amount: 400 },
  ]

  return (
    <Expenses items={expenses} />
  );
};

export default App;
