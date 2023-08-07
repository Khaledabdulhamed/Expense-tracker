import './ExpenseForm.css'
import { useState } from 'react'
function ExpenseForm (props) {
    const [enteredTitle, setenteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const titleChangeHandler = (event) =>{
        setenteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setenteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
      
    }

   



    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"
                     onChange={amountChangeHandler}
                        value= {enteredAmount}
                     />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                     min="2020-01-01" 
                     max="2023-12-12"
                      onChange={dateChangeHandler}
                        value={enteredDate}
                      />
                </div>

            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;