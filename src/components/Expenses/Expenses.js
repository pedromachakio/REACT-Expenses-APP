import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [yearSelected, setSelectedYear] = useState("2021");

  function saveYearChangeHandler(selectedYear) {
    setSelectedYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(function (expense) {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  let expensesToBeRendered = <p>No Expenses Found for the Selected Year</p>;

  if (filteredExpenses.length > 0) {
    expensesToBeRendered = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={yearSelected}
          onYearChange={saveYearChangeHandler}
        />
        {expensesToBeRendered}
      </Card>
    </div>
  );
}

export default Expenses;
