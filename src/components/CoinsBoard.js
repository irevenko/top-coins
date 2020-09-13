import React, { useState, useEffect } from 'react';
import Coin from './Coin';
import axios from 'axios';
import { Chart } from 'react-charts';

const API_LINK = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1y';
let loading = 'Loading...';

function CoinsBoard() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => { 
    async function fetchData() {
      try {
        const res = await axios.get(API_LINK);
        const sortedData = res.data.sort((a, b) => b.current_price - a.current_price);
        setCoins(sortedData);
      } catch (err) {
        return err;
      }
     }
    fetchData();
    loading = '';
  }, []);

  function handleChange(e) { 
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(c => { 
    return c.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="CoinsBoard">
      <h3 className="center-align">Search bar</h3>
      <div className="row">
    <div className="input-field col s6 offset-s3">
      <input id="first_name2" type="text" className="validate" onChange={handleChange}/>
      <label className="active" htmlFor="first_name2">Enter the coin name</label>
    </div>
  </div>
      <h3 className="center-align">Top&nbsp;
        <strong className="blue-text text-darken-1 center-align">
        {coins.length}
        </strong>
        &nbsp;coins
      </h3>
  <h1 className="center-align blue-text text-darken-1">{loading}</h1>
      {filteredCoins.map(c => { 
        return ( 
          <Coin 
          key={c.id} 
          name={c.name} 
          coinLogo={c.image}
          symbol={c.symbol}
          marketCap={c.market_cap}
          price={c.current_price}
          totalVolume={c.total_volume}
          priceDifference={c.price_change_percentage_24h}
          ath={c.ath}
          atl={c.atl}
          athDate={c.ath_date}
          atlDate={c.atl_date}
          cSupply={c.circulating_supply}/>
       )
    })}
    </div>
  )
}

export default CoinsBoard;