import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar.js';
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    console.log("it did mount")
    // axios.get('http://localhost:3001/api/auth/setUser')
    //   .then(res => {
    //     console.log(res.user);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }
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
