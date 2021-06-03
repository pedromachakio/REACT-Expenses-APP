import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

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
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
