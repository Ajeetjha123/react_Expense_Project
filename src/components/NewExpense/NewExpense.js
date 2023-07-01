import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
     const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random().toString() * 1000),
    };
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;