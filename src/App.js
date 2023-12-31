import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: '94.72',
    date: new Date(2023, 5, 29),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: '294.12',
    date: new Date(2022, 6, 25),
  },
  {
    id: 'e3',
    title: 'New Desk (Wooden)',
    amount: '940',
    date: new Date(2021, 4, 15),
  },
  {
    id: 'e4',
    title: 'New Tv',
    amount: '244.52',
    date: new Date(2020, 3, 20),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items = {expenses} />
    </div>
  );
}
export default App;
