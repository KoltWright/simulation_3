import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar.js';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="body-container">
          <div className="body-upper">
            <div>
              <h1>test</h1>
            </div>
            <div>
              <p>
                Welcome to Helo! Find recommended friends based on your similarities,
                and even search for them by name. The more you update your profile, the
                better recommendations we can make!
              </p>
            </div>
          </div>
          <div className="body-lower">
            <h1>Testing test</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
