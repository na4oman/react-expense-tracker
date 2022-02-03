import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
  // const totalMax = Math.max(...dataPointValues)
  const totalMax = dataPointValues.reduce((acc, cur) => acc + cur, 0).toFixed(2)
  // console.log(totalMax)

  return (
    <div>
      <h2 className='chart-title'>Total Expenses: {totalMax}</h2>
      <div className='chart'>
        {props.dataPoints.map(dataPoint => (
          <ChartBar
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        ))}
      </div>
    </div>
  )
}

export default Chart
