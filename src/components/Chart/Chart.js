import './Chart.css';
import ChartBar from './ChartBar';
const Chart = (props) => {
  if (!props.dataPoints || !Array.isArray(props.dataPoints)) {
    return <p>No data available.</p>;
  }

  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointsValues);

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
};

export default Chart;