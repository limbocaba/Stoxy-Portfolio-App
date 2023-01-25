import React from 'react'
import './StatsRow.css'
import StockChart from "./stock.svg"

export default function StatsRow(props) {

  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

  return (
    <div className='row'>
      <div className="row-intro">
        <h1>{props.name}</h1>
        <p>{props.shares && (props.shares + "shares")}</p>
      </div>
      <div className="row-chart">
        <img src={StockChart} height={16} /> 
      </div>
      <div className="row-numbers">
        <p className="row-price">{props.price}</p>
        <p className="row-percentage">+{Number(percentage).toFixed(2)}%</p>
      </div>

    </div>
  )
}

