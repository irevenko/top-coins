/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

function Navbar() { 
  return ( 
   <div className="Navbar">
    <nav>
    <div className="nav-wrapper blue lighten-1">
      <span className="brand-logo">💎 Top coins </span>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/irevenko/top-coins" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons" id="mobile-link">Source Code ⌨️</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/irevenko/top-coins">Source Code ⌨️</a></li>
      </ul>
    </div>
    </nav>
   </div>
  );
}

export default Navbar;
