import React, { Component } from 'react';
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
          <p> sign-in </p>
          <button onClick={this.signin} class="button-home"> sign in </button>
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
