import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Budget from './Budget.js'
// Array for record data
const budget = {
  "income": [
    {
      "name": "Salary",
      "amount": 2000,
      "Frequency": 2,
    },
    {
      "name": "Consulting",
      "amount": 300,
      "Frequency": 1,
    },
  ],

  "expenses": [
    {
      "name": "Mortgage",
      "amount": 1500,
    },
    {
      "name": "Phone",
      "amount": 120,
    },
    {
      "name": "Internet",
      "amount": 60,
    },
    {
      "name": "Liquor",
      "amount": 300,
    },
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Budget {...budget}/>
      </div>
    );
  }
}

export default App;
