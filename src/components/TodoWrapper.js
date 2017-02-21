import React from 'react';
import logo from '../logo.svg';
import '../App.css';

// Stateless Function Component
const TodoWrapper = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React Todo App</h2>
      </div>
      <div className="App-intro">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = TodoWrapper;
