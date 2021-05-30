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
        <ExpenseFilter selectedYear={yearSelected} onYearChange={saveYearChangeHandler} />
        <ExpenseItem
          title={props.expenses[0].title}
          price={props.expenses[0].price}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          price={props.expenses[1].price}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          price={props.expenses[2].price}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          price={props.expenses[3].price}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
