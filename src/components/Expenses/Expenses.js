import './Expenses.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import { useState } from 'react';

function Expenses(props){

    const [filteredYear, setfilteredYear] = useState('2019')

   

    const filterChangeHandler = (selectedYear) => {
       

        console.log("expenses.JS")
        console.log(selectedYear)
        setfilteredYear(selectedYear);
    }


    return (    
    <div>
    <Card className='expenses'>
    <ExpensesFilter  onChangeFilter = {filterChangeHandler} selected={filteredYear}/>
    {props.items.map((expense)=>(
        <ExpenseItem key={expense.id} title={expense.title} amount= {expense.amount}  date={expense.date}/>
    ))}

    </Card>
    </div>)

}

export default Expenses;