import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Auth.css';

class Auth extends Component {
  render() {
    return (
      <div id="auth-container">
        <div className='auth-login'>
        <div className="auth-login-upper">
          <img className="auth-logo-img" src="auth-logo.png" alt="Auth Logo"/>
          <h1>Helo</h1>
        </div>
        <div className="auth-login-lower">
          <a className="auth-button" href="http://localhost:3001/api/auth/login">Login \ Register</a>
        </div>
        </div>
      </div>
    )
  }
}

export default Auth;
