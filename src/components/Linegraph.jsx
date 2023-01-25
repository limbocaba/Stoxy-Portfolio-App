import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip
} from 'chart.js'
  import "./Linegraph.css"

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale, 
  PointElement,
  Legend,
  Tooltip
)

export default function Linegraph() {
  const [graphData, setGraphData] = useState([]);

  const createMockData = () => {
    let data = [];
    let value = 50;
    for (let i = 0; i < 366; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(1);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({ x: date, y: value });
    }
    setGraphData(data)
  }

  useEffect(() => {
    createMockData()
  }, [])

  const data = {
    labels: ['', '', '', '', '' , '', '', '', '', '', '', '', '', '', '', '', '', '' , '', '', '', '', '', '', '', ''],
    datasets: [{
      label: 'Your Stock Portfolio',
      data: [4.2, 4.7, 3.4, 5.8, 3, 4.2, 4.3, 4.3, 3.2, 5.3, 5.7, 4.9, 5.3, 4.1, 4.9, 3.4, 5.2, 5.1, 5, 5.2, 5.8, 4.9, 5, 5, 5],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: '#5AC53B',
      fill: true,
      tension: 0,
      pointBorderColor: 'rgba(0, 0, 0, 0)',
      // pointBackgroundColor: 'rgba(0, 0, 0, 0)',
      // pointHoverBackgroundColor: '#5AC53B',
      // pointHoverBorderColor: '#000000',
      // pointHoverBorderWidth: 4,
      // pointHoverRadius: 6,
    }]
  }
  
  const options = {
    plugins: {
        legend: false
    },
    scales: {
      y: {
        min: 3,
        max: 6,
        display: false
      }
      }
    }
    

  return (
    <div className='linegraph'>
      <Line
        data={data}
        options={options}
      />
      
    </div>
  )
}

