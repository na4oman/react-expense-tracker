import { useState } from 'react/cjs/react.development'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState('ALL')

  const changeFilterHandler = changedYear => {
    setYear(changedYear)
  }

  const filteredYear = expenses.filter(
    expense => expense.date.getFullYear().toString() === year
  )

  const filteredExpenses = year === 'ALL' ? expenses : filteredYear

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={year} onChangeFilter={changeFilterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
