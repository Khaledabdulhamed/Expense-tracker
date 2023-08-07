import './Expenses.css'
// import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import { useState } from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

function Expenses(props){

    const [filteredYear, setfilteredYear] = useState('2019')

   

    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })



    return (    
    <div>
    <Card className='expenses'>
    <ExpensesFilter  onChangeFilter = {filterChangeHandler} selected={filteredYear}/>
    <ExpensesChart items = {filteredExpenses} />
   <ExpenseList items = {filteredExpenses} />
   

    </Card>
    </div>)

}

export default Expenses;