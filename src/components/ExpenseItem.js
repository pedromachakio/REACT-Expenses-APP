import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 18); // contagem começa em Janeiro = 0
    const expenseTitle = "Bolo pa Maggs";
    const expenseAmount = 400;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div> 
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
