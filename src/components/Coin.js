import React from 'react';

const styles = { 
  card: { 
    width: 350,
  }
}

function Coin({coinLogo, name, symbol, price, volume}) {
  return (
    <div className="Coins">
      <div class="flex">
        <div>
          <article class="card" style={styles.card}>
            <img width="300" src={coinLogo} alt="coin logo"/>
            <footer>
              <h3>{name}</h3>
              <p>{symbol}</p>
              <p>${price}</p>
              <p>${volume.toLocaleString()}</p>
            </footer>
          </article>
        </div>
      <div>
        </div>
      </div>
    </div>
  )
}

export default Coin;