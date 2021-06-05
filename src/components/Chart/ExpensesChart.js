import Chart from "./Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Fev",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Abr",
      value: 0,
    },
    {
      label: "Mai",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Ago",
      value: 0,
    },
    {
      label: "Set",
      value: 0,
    },
    {
      label: "Out",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dez",
      value: 0,
    },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // returns 0->11 depending on month
    chartDataPoints[expenseMonth].value += expense.price;
  }

  return <Chart dataPoints={chartDataPoints}></Chart>;
};

export default ExpensesChart;
