import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
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

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
