import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const arrayOfDataPointsValues = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  let totalMaxValue = Math.max(...arrayOfDataPointsValues); //with the spread operator we can feed Math.max with one value at a time instead of an array

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
