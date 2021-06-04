import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.filteredExpenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No Expenses Found for the Selected Year
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
