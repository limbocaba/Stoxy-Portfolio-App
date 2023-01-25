import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./Stats.css"
import StatsRow from './StatsRow';

const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";

const API_KEY = "cf8a2vqad3i8qmbtmoa0cf8a2vqad3i8qmbtmoag"

const KEY_URL = `&token=${API_KEY}`;

export default function Stats() {
  const [stockData, setstockData] = useState([])

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}${stock}${KEY_URL}`)
      .catch((error) => {
        console.error("Error", error.message)
      });
  };

  useEffect(() => {
    let tempStocksData = []
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
          .then((res) => {
            tempStocksData.push({
              name: stock,
              ...res.data
            })
          })
      )
    });

    Promise.all(promises).then(() => {
      setstockData(tempStocksData)
      console.log(tempStocksData)
    })

  }, [])

  return (
    <div className='stats'>
      <div className='stats-container'>
        <div className="stats-header">
          <p>Stocks</p>
        </div>
        <div className="stats-content">
          <div className="stats-rows">
            {/* for our owned stocks */}
          </div>
        </div>
        <div className="stats-header">
          <p>Lists</p>
        </div>
        <div className="stats-content">
          <div className="stats-rows">
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

