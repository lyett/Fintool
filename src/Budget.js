import React, { Component } from 'react';
import './Budget.css';
// Table layout for Income records source
class Income extends Component {
  render() {
    return (
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.amount}</td>
            <td>{this.props.Frequency}</td>
          </tr>
        )
    }
}
// Table layout for Expense records source
class Expense extends Component {
  render() {
    return (
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.amount}</td>
          </tr>
        )
    }
}
// Source Income records
class Budget extends Component {
  render() {
      const incomeComponents = this.props.income.map(incomeObject => {
        return (
        <Income {...incomeObject} />
          )
      })
// Source Expense records
      const expenseComponents = this.props.expenses.map(expensesObject => {
        return (
          <Expense {...expensesObject} />
        )
      })
// Page layout for records
    return (
      <div className="Budget">
        <h1>Budget</h1>
        <div>
          <h2>Income:</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {incomeComponents}
              </tbody> 
            </table>         
        </div>

        <div>
          <h2>Expenses:</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {expenseComponents}
              </tbody> 
            </table>         
        </div>
      </div>
    );
  }
}

export default Budget;
