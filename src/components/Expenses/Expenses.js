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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={yearSelected}
          onYearChange={saveYearChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
