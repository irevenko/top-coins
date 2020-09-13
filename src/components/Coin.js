import React from 'react';

function Coin({coinLogo, name, symbol, price, ath, atl, marketCap, totalVolume, priceDifference, cSupply}) {
  return (
    <div className="Coins valign-wrapper row" id="coin-wrapper"> 
      <ul className="collection col s8 offset-s2">
    <li className="collection-item avatar">
      <img src={coinLogo} alt="coin logo" className="circle"/>
      <span className="title">{name}</span>
      <p className="blue-text text-darken-1">{symbol}</p>
      <p>Current Price: <span className="blue-text text-darken-1">${price}</span></p>
  <p>All Time Highest Price: <span className="purple-text text-darken-1">${ath}</span></p>
  <p>All Time Lowest Price: <span className="yellow-text text-darken-4">${atl}</span></p>
      <p>Circulating Supply: <span className="indigo-text text-darken-1">{cSupply.toLocaleString()}</span></p>
      <p>Market Cap: <span className="blue-text text-darken-1">${marketCap.toLocaleString()}</span></p>
      <p>Total Volume: <span className="blue-text text-darken-1">${totalVolume.toLocaleString()}</span></p>
       {
         priceDifference < 0 ? ( 
           <p>
             Price change | 24h: <span className="red-text"> {priceDifference.toFixed(2)}%</span>
           </p>
         ) : ( 
          <p>
          Price change | 24h: <span className="green-text"> {priceDifference.toFixed(2)}%</span>
        </p>
         )
       }
    </li>
  </ul>
    </div>
  )
}

export default Coin;