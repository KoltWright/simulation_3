import React, { Component } from 'react';
import './App.css';

import Auth from './components/Auth/Auth.js';
import Navbar from './components/Navbar/Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
