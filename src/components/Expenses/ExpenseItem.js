import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const clickHandler = () => console.log("Clicked!!!!");
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={clickHandler}>Click on me</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
