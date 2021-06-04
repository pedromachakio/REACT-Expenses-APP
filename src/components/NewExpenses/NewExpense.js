import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isDisplayingForm, setIsDisplayingForm] = useState(false);

  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    hideFormHandler();
  };

  const hideFormHandler = function () {
    setIsDisplayingForm(false);
  };

  function displayFormHandler() {
    setIsDisplayingForm(true);
  }

  return (
    <div className="new-expense">
      {!isDisplayingForm && (
        <button onClick={displayFormHandler}>Add New Expense</button>
      )}
      {isDisplayingForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelOrSubmitForm={hideFormHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
