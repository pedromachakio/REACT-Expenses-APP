import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [titleEnteredByUser, setTitleEnteredByUser] = useState("");
  const [amountEnteredByUser, setAmountEnteredByUser] = useState("");
  const [dateEnteredByUser, setDateEnteredByUser] = useState("");

  const titleChangeHandler = function (event) {
    setTitleEnteredByUser(event.target.value);
  };

  const amountChangeHandler = function (event) {
    setAmountEnteredByUser(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateEnteredByUser(event.target.value);
  };

  const formSubmitHandler = function (event) {
    event.preventDefault(); // cancelar comportamento default de dar refresh depois de um submit

    const expenseData = {
      title: titleEnteredByUser,
      price: amountEnteredByUser,
      date: new Date(dateEnteredByUser),
    };

    props.onSaveExpenseData(expenseData);

    setTitleEnteredByUser("");
    setAmountEnteredByUser("");
    setDateEnteredByUser("");
  };

   return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleEnteredByUser}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEnteredByUser}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateEnteredByUser}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelOrSubmitForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
