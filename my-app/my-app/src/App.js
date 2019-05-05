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
            <br/>
            <br/>
            <div className="login-fields">
              <form>
                <div class="form-group">
                  <input type="email" class="form-control login-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your email ..."/><br/>
                  <br/>
                  <input type="password" class="form-control login-field" id="exampleInputPassword1" placeholder="your password ..."/><br/>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary login-button" onClick={this.signin} >log in</button>
              </form>
              <br/>
              <br/>
              <div class="login-setup">
                <p><i><b>first time?</b><br/>
                setup your first Flow meter <u>here</u></i></p>
              </div>
              <br/>
              <br/>
              <div class="login-about">
                <p><u>about Flow</u> || <u>contact us</u> || <u>privacy policy</u></p>
              </div>
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
