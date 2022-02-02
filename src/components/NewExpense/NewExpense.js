import { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
  const [isFormShown, setIsFormShown] = useState(false)

  const saveExpenseDataHandler = enteredExpenseData => {
    const saveExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString().slice(2),
    }
    props.onAddExpense(saveExpenseData)
    setIsFormShown(false)
  }

  const hideFormHandler = () => {
    setIsFormShown(false)
  }

  const showFormHandler = () => {
    setIsFormShown(true)
  }

  return (
    <div className='new-expense'>
      {!isFormShown && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
      {isFormShown && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideForm={hideFormHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
