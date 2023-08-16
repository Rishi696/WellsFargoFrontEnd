// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AccountSummary.css'

// Define the AccountSummary component
const AccountSummary = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch account data from JSON server
    axios.get('http://localhost:3000/accounts')
      .then(response => {
        setAccounts(response.data);
      })
      .catch(error => {
        console.error('Error fetching account data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Account Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Balance</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <tr key={account.id}>
              <td>{account.accountNumber}</td>
              <td>{account.balance}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountSummary;
