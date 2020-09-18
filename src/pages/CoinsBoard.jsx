import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from '../components/Coin';
import {
  formatDate,
  sortByMarketCap,
  sortByPrice,
  sortBySupply,
  sortByTotalVolume,
} from '../utils/functions';

let loading = 'Loading...';
const API_LINK = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1y';

function CoinsBoard() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [sortVal, setSortVal] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(API_LINK);
        switch (sortVal) {
          case 'current_price':
            setCoins(sortByPrice(res.data));
            break;
          case 'market_cap':
            setCoins(sortByMarketCap(res.data));
            break;
          case 'total_volume':
            setCoins(sortByTotalVolume(res.data));
            break;
          case 'supply':
            setCoins(sortBySupply(res.data));
            break;
          default:
            setCoins(sortByPrice(res.data));
        }
      } catch (err) {
        return err;
      }
    }
    fetchData();
    loading = '';
  }, [sortVal]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSelect(e) {
    setSortVal(e.target.value);
  }

  const filteredCoins = coins.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="CoinsBoard">
      <h3 className="center-align">Search bar</h3>
      <div className="row">
        <div className="input-field col s6 offset-s3">
          <input id="first_name2" type="text" className="validate" onChange={handleSearch} />
          <label className="active" htmlFor="first_name2">Enter the coin name</label>
        </div>
      </div>
      <h3 className="center-align">
        Top&nbsp;
        <strong className="blue-text text-darken-1 center-align">
          {coins.length}
        </strong>
          &nbsp;coins
      </h3>
      <div id="select-wrapper">
        <label className="blue-text text-darken-1">Sort by</label>
        <select className="browser-default" onChange={handleSelect}>
          <option value="current_price" defaultValue>Current Price</option>
          <option value="total_volume">Total Volume</option>
          <option value="market_cap">Market Cap</option>
          <option value="supply">Circulating Supply</option>
        </select>
      </div>
      <h1 className="center-align blue-text text-darken-1">{loading}</h1>
      {filteredCoins.map((c) => (
        <Coin
          key={c.id}
          id={c.id}
          name={c.name}
          coinLogo={c.image}
          symbol={c.symbol}
          marketCap={c.market_cap}
          marketCapRank={c.market_cap_rank}
          price={c.current_price}
          totalVolume={c.total_volume}
          priceDifference={c.price_change_percentage_24h}
          marketDifference={c.market_cap_change_percentage_24h}
          ath={c.ath}
          atl={c.atl}
          athDate={formatDate(c.ath_date)}
          atlDate={formatDate(c.atl_date)}
          coinSupply={c.circulating_supply}
        />
      ))}
    </div>
  );
}

export default CoinsBoard;
