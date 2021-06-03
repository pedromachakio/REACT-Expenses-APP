import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  let expensesToBeRendered = <p>No Expenses Found for the Selected Year</p>;

  if (props.filteredExpenses.length > 0) {
    expensesToBeRendered = props.filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list">{expensesToBeRendered}</ul>;
}

export default ExpensesList;
