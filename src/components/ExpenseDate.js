import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date
    .toLocaleString("pt-PT", { month: "long" })
    .toLowerCase(); // fica mais clean numa var à parte do que dentro do JSX code
  const day = props.date.toLocaleString("pt-PT", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
