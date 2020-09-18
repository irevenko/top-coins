import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from '../components/Chart';

function Info() {
  const { id } = useParams();
  const API_LINK = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`;
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(API_LINK);
        setCoinData(res.data.prices);
      } catch (err) {
        return err;
      }
    }
    fetchData();
  }, [API_LINK]);

  const formatPrice = (price) => price.map((el) => ({
    t: el[0],
    y: el[1].toFixed(2),
  }));
  return (
    <div className="Info">
      <h3 className="center-align">Data for the last 30 days</h3>
      <Chart chartData={formatPrice(coinData)} />
    </div>
  );
}

export default Info;
