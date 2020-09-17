/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Link } from 'react-router-dom';

function Coin({id, coinLogo, name, symbol, price, ath, athDate, atl, atlDate, marketCap, marketCapRank, totalVolume, priceDifference, marketDifference, coinSupply}) {
  return (
    <div className="Coins valign-wrapper row" id="coin-wrapper"> 
      <ul className="collection col s8 offset-s2">
        <li className="collection-item avatar">
          <img src={coinLogo} alt="coin logo" className="circle"/>
          <span className="title">{name}</span>
          <p className="blue-text text-darken-1">{symbol}</p>
          <p>Current Price: <span className="blue-text text-darken-1">${price}</span></p>
          <p>All Time Highest Price: <span className="purple-text text-darken-1">${ath}</span><span className="blue-text text-darken-1"> at {athDate}</span></p>
          <p>All Time Lowest Price: <span className="yellow-text text-darken-4">${atl}</span> <span className="blue-text text-darken-1">at {atlDate}</span></p>
          <p>Circulating Supply: <span className="indigo-text text-darken-1">{coinSupply.toLocaleString()}</span></p>
          <p>Market Cap: <span className="blue-text text-darken-1">${marketCap.toLocaleString()}</span></p>
          <p>Market Cap Rank: <span className="deep-orange-text text-darken-1">{marketCapRank}</span></p>
          <p>Total Volume: <span className="blue-text text-darken-1">${totalVolume.toLocaleString()}</span></p>
          {
            priceDifference < 0 ? ( 
              <p>
                Price change | 24h: <span className="red-text"> ⬇️{priceDifference.toFixed(2)}%</span>
              </p>
            ) : ( 
              <p>
              Price change | 24h: <span className="green-text"> ⬆️{priceDifference.toFixed(2)}%</span>
              </p>
            )
          }
          {
            priceDifference < 0 ? ( 
              <p>
                Market Cap change | 24h: <span className="red-text"> ⬇️{marketDifference.toFixed(2)}%</span>
              </p>
            ) : ( 
              <p>
                Market Cap change | 24h: <span className="green-text"> ⬆️{marketDifference.toFixed(2)}%</span>
              </p>
            )
          }
          <Link to={`/chart/${id}`}>DETAILED PRICE INFO</Link>
        </li>
      </ul>
    </div>
  )
}

export default Coin;