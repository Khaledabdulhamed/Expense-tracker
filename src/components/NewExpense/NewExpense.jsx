import './NewExpense.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm'; 
import { useState } from 'react';

function NewExpense (props) {

    const [isAddExpense, setIsAddExpense] = useState(false)

    function handleAddingExpense () {
        setIsAddExpense(true)
    }

    const saveExpenseHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsAddExpense(false)
    }


    const stopAddingHandler = () =>{
        setIsAddExpense(false)
    }
        return (
        <div className='new-expense'>
        {isAddExpense ? <ExpenseForm onCancel = {stopAddingHandler} onSaveExpenseData ={saveExpenseHandler}/>
        :<button onClick={handleAddingExpense}>Add New Expense</button> }
        
            
        </div>)
}

export default NewExpense;