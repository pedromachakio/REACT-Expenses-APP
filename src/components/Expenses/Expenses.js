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
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={yearSelected}
          onYearChange={saveYearChangeHandler}
        />
        {props.expenses.map((expenses) => (
          <ExpenseItem
            title={expenses.title}
            price={expenses.price}
            date={expenses.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
