// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import AccountSummary from './AccountSummary';
import TransactionPage from './TransactionPage';
import './TransactionPage.css';
import './CreateAccount.css';
import './AccountSummary.css';
import './dashboard_navbar.css';
import dashboard_navbar from './dashboard_navbar';
//import TransferMoney from './TransferMoney';

// Define the Dashboard component
const Dashboard = () => {
  return (
    
      <div>

        <nav>

          <ul>

            <li>
              <Link to="/account-summary">Account Summary</Link>
            </li>
            <li>
              <Link to="/transaction-page">Transaction</Link>
            </li>
            
            {/* <li>
              <Link to="/transfer-money">Transfer Money</Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
        <Route path="/transaction-page" element={<TransactionPage />} />
        <Route path="/account-summary" element={<AccountSummary />} />
          {/* <Route path="/transfer-money">
            <TransferMoney />
          </Route> */}
        </Routes>
      </div>
    
  );
};

export default Dashboard;
