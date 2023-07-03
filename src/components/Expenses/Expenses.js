import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
const Expenses = (props) =>{
  const[filteredYear, setFilteredYear] = useState('2020');
  const filterChangedHandler = selectedYear => {
     setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = <p>No expenses found.</p>
  if(filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItem 
        key = {expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} 
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpenseFilter 
      selected={filteredYear} 
      onChangedFilter={filterChangedHandler} 
      />
      {expensesContent};
    </Card>
  );
}

export default Expenses;