// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import AccountSummary from './AccountSummary';
import './CreateAccount.css'
import './AccountSummary.css'
//import TransferMoney from './TransferMoney';

// Define the Dashboard component
const Dashboard = () => {
  return (
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create-account">Create Account</Link>
            </li>
            <li>
              <Link to="/account-summary">Account Summary</Link>
            </li>
            {/* <li>
              <Link to="/transfer-money">Transfer Money</Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/dashboard/create-account">
            <CreateAccount />
          </Route>
          <Route path="/dashboard/account-summary">
            <AccountSummary />
          </Route>
          {/* <Route path="/transfer-money">
            <TransferMoney />
          </Route> */}
        </Routes>
      </div>
    
  );
};

export default Dashboard;
