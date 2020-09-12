import React, { useState, useEffect } from 'react';
import Coin from './Coin';
import axios from 'axios';

const API_LINK = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1y';
const styles = { 
  inp: { 
    marginTop: 100,
    width: 400,
  }
}

function CoinsBoard() {
  const [coins, setCoin] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => { 
    async function fetchData() {
      try {
        const res = await axios.get(API_LINK);
        setCoin(res.data);
        console.log(res.data);
      } catch (err) {
        console.err(err);
      }
     }
    fetchData();
  }, []);

  function handleChange(e) { 
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(c => { 
    return c.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="CoinsBoard">
      <input style={styles.inp} type="text" placeholder="Search for the coin" onChange={handleChange}/>
      {filteredCoins.map(c => { 
      return ( 
        <Coin 
        key={c.id} 
        name={c.name} 
        coinLogo={c.image}
        symbol={c.symbol}
        volume={c.market_cap}
        price={c.current_price}/>
      )
    })}
    </div>
  )
}

export default CoinsBoard;