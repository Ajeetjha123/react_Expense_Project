import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
const Expenses = (props) =>{
  const[filteredYear, setFilteredYear] = useState('2020');
  const filterChangedHandler = selectedYear => {
     setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter 
      selected={filteredYear} 
      onChangedFilter={filterChangedHandler} 
      />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}

export default Expenses;