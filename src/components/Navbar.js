/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

function Navbar() { 
  return ( 
    <div className="Navbar">
      <div>
        <nav className="demo">
          <span className="brand">
            <h2>Top Coins 💎</h2>
          </span>
          <input id="bmenub" type="checkbox" className="show" />
          <label htmlFor="bmenub" className="burger pseudo button">menu</label>
          <div className="menu">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/irevenko/top-coins" className="button icon-puzzle">Source Code</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
