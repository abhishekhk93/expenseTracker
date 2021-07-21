import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React from "react";
import { useState } from 'react';

const NewExpense = (props) => {
    const submitFormHandler = (expenseData) => {
        props.onAddExpense(expenseData);
    }
    const showFormHandler = () => {
        setShowForm(true);
    };
    const closeFormHandler = () => {
        setShowForm(false);
    };

    const [showForm, setShowForm] = useState(false);
    return (
        <div className="new-expense">
            {!showForm && <button type="button" onClick={showFormHandler}>Add expense</button>}
            {showForm  && <ExpenseForm onSubmitForm={submitFormHandler} onCancelForm={closeFormHandler}/>}
        </div>
    );
}

export default NewExpense;
