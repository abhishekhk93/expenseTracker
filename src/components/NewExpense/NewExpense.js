import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const submitFormHandler = (expenseData) => {
        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSubmitForm={submitFormHandler}/>
        </div>
    );
}

export default NewExpense;
