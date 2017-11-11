import React, {Component} from 'react';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar-container">
        <div id="navbar-left">
          <h2>Helo</h2>
          <img className="navbar-image" src="home-logo.png" alt="Home"/>
          <img className="navbar-image" src="search-logo.png" alt="Search"/>
        </div>
        <div id="navbar-mid">
          <span>Dashboard</span>
        </div>
        <div id="navbar-right">
          <span>Logout</span>
        </div>
      </nav>
    )
  }
}

export default Navbar;
