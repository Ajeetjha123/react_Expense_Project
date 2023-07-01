import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
  const [expense, setExpense] = useState(props.amount);
  const clickHandler = () => {
    setExpense('100');
  } 
  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${expense}</div>
        <button className='expense-item__btn' onClick={clickHandler}>Change Amount</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;