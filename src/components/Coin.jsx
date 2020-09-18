/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Coin({
  id, coinLogo, name, symbol, price, ath, athDate, atl, atlDate, marketCap, marketCapRank, totalVolume, priceDifference, marketDifference, coinSupply,
}) {
  return (
    <div className="Coins valign-wrapper row" id="coin-wrapper">
      <ul className="collection col s8 offset-s2">
        <li className="collection-item avatar">
          <img src={coinLogo} alt="coin logo" className="circle" />
          <span className="title">{name}</span>
          <p className="blue-text text-darken-1">{symbol}</p>
          <p>
            Current Price:&nbsp;
            <span className="blue-text text-darken-1">
              $
              {price}
            </span>
          </p>
          <p>
            All Time Highest Price:&nbsp;
            <span className="purple-text text-darken-1">
              $
              {ath}
            </span>
            <span className="blue-text text-darken-1">
              {' '}
              at&nbsp;
              {athDate}
            </span>
          </p>
          <p>
            All Time Lowest Price:&nbsp;
            <span className="yellow-text text-darken-4">
              $
              {atl}
            </span>
            {' '}
            <span className="blue-text text-darken-1">
              at&nbsp;
              {atlDate}
            </span>
          </p>
          <p>
            Circulating Supply:&nbsp;
            <span className="indigo-text text-darken-1">{coinSupply.toLocaleString()}</span>
          </p>
          <p>
            Market Cap:&nbsp;
            <span className="blue-text text-darken-1">
              $
              {marketCap.toLocaleString()}
            </span>
          </p>
          <p>
            Market Cap Rank:&nbsp;
            <span className="deep-orange-text text-darken-1">{marketCapRank}</span>
          </p>
          <p>
            Total Volume:&nbsp;
            <span className="blue-text text-darken-1">
              $
              {totalVolume.toLocaleString()}
            </span>
          </p>
          {
            priceDifference < 0 ? (
              <p>
                Price change | 24h:&nbsp;
                {' '}
                <span className="red-text">
                  {' '}
                  ⬇️
                  {priceDifference.toFixed(2)}
                  %
                </span>
              </p>
            ) : (
              <p>
                Price change | 24h:&nbsp;
                {' '}
                <span className="green-text">
                  {' '}
                  ⬆️
                  {priceDifference.toFixed(2)}
                  %
                </span>
              </p>
            )
          }
          {
            priceDifference < 0 ? (
              <p>
                Market Cap change | 24h:&nbsp;
                {' '}
                <span className="red-text">
                  {' '}
                  ⬇️
                  {marketDifference.toFixed(2)}
                  %
                </span>
              </p>
            ) : (
              <p>
                Market Cap change | 24h:&nbsp;
                {' '}
                <span className="green-text">
                  {' '}
                  ⬆️
                  {marketDifference.toFixed(2)}
                  %
                </span>
              </p>
            )
          }
          <Link to={`/chart/${id}`}>DETAILED PRICE INFO</Link>
        </li>
      </ul>
    </div>
  );
}

Coin.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  coinLogo: PropTypes.string,
  symbol: PropTypes.string,
  marketCap: PropTypes.number,
  marketCapRank: PropTypes.number,
  price: PropTypes.number,
  totalVolume: PropTypes.number,
  priceDifference: PropTypes.number,
  marketDifference: PropTypes.number,
  ath: PropTypes.number,
  atl: PropTypes.number,
  athDate: PropTypes.string,
  atlDate: PropTypes.string,
  coinSupply: PropTypes.number,
}

Coin.defaultProps = { 
  id: 'bitcoin',
  name: 'Bitcoin',
  coinLogo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  symbol: 'btc',
  marketCap: 200919490343, //toLocaleString()
  marketCapRank: 1,
  price: 10863.28,
  totalVolume: 20631266554,
  priceDifference: -71.86662446,
  marketDifference: -0.65721,
  ath: 19665.39,
  atl: 67.81,
  athDate: '2017-12-16T00:00:00.000Z', //needs to be formated
  atlDate: '2013-07-06T00:00:00.000Z"',
  coinSupply: 21000000.0,
}

export default Coin;
