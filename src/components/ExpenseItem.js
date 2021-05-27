import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  /* o parâmetro não precisa de ser props mas é a convenção
  const expenseDate = new Date(2021, 2, 18); // contagem começa em Janeiro = 0
    const expenseTitle = "Bolo pa Maggs";
    const expenseAmount = 400;*/

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
