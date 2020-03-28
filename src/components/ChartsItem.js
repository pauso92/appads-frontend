import React from 'react'
import { Chart } from 'react-charts'
import '../css/ChartsItem.css' 

const ReactChartComponent = () => {
  const data = React.useMemo(
    () => [
      [[1, 10], [2, 15], [3, 10]],
      [[1, 10], [2, 13], [3, 10]],
      [[1, 14], [2, 10], [3, 13]]
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div>
      <div class="tabla2">
        <Chart data={data} axes={axes} />
      </div>
      <div class="tabla2">
        <Chart data={data} axes={axes} />
      </div>
      <div class="tabla2">
        <Chart data={data} axes={axes} />
      </div>
    </div>
  )
}


export default ReactChartComponent