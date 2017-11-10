import React, {Component} from 'react';

import './Auth.css';

class Auth extends Component {
  render() {
    return (
      <div id="auth-container">
        <div className='auth-login'>
        <div className="auth-login-upper">
          <img src="auth-logo.png" />
          <h1>Helo</h1>
        </div>
        <div className="auth-login-lower">
          <div className="auth-button">Login \ Register</div>
        </div>
        </div>
      </div>
    )
  }
}

export default Auth;
