import React, { Component } from 'react';
import logo from './text-logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     page: 'sign-in page'
   }
  }

  signin = () => {
    this.setState({page: 'data page'})
  }

  logout = () => {
    this.setState({page: 'sign-in page'})
  }

  render() {
    if (this.state.page === 'sign-in page') {
      return (
        <div className="sign-in">
          <div className="sign-in-contents">
            <img src={logo} className="logo" alt="logo" />
            <div className="login-fields">
              <input type="text" name="FirstName" value="your email ..."/><br/>
              <input type="text" name="LastName" value="password ..."/>
              <button onClick={this.signin} class="button-home">LOGIN</button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 'data page') {
      return (
        <div className="App">
          <p> data pages </p>
          <button onClick={this.logout} class="button-home"> log out </button>
        </div>
      );
    }
  }
}

export default App;
