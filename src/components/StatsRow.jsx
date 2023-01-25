import React from 'react'
import './StatsRow.css'
import StockChart from "./stock.svg"
import { db } from '../firebase'

export default function StatsRow(props) {

  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

  // const buyStock = () => {
  //   db.collection('myStocks')
  //     .where("ticker", '==', props.name)
  //     .get()
  //     .then((querySnapshot) => { 
  //       if (!querySnapshot.empty) {

  //         querySnapshot.forEach(function (doc) {
  //           db.collection('myStocks')
  //             .doc(doc.id)
  //             .update({
  //               shares: doc.data().shares + 1
  //             })
  //         })
  //       } else {
  //         db.collection('myStocks')
  //           .add({
  //             ticker: props.name,
  //             shares: 1
  //         })
  //       }
  //   })
  // }

  return (
    <div className='row'>
      <div className="row-intro">
        <h1>{props.name}</h1>
        <p>{props.shares && (props.shares + " shares")}</p>
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

