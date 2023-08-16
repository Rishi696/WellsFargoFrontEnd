// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './App.css';
// import Login from './components/Login.js';
// import './components/Login.css';
// import Signup from './components/Signup.js';
// import './components/Signup.css';
// import Dashboard from './components/Dashboard.js';
// import './components/Dashboard.css';
// import AdminDashboard from './components/Admindashboard';
// import AdminLogin from './components/Adminlogin';
// import './components/Admindashboard.css';
// import './components/Adminlogin.css';



// function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//   return (
//     <Router>
//       <div className="App">
//         {/* Conditionally render the navigation bar */}
//         {!isLoggedIn && (
//         <nav className="navbar">
//           <ul className="nav-list">
            
//             <li className="nav-item"><Link to="/login">Login</Link></li>
//             <li className="nav-item"><Link to="/signup">Signup</Link></li>
//             <li className="nav-item"><Link to="/admin"> Admin</Link></li>
//           </ul>
//         </nav>
//         )}
//         <Routes>
        
//         <Route path="/login" element={<Login isLoggedIn={setIsLoggedIn} />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard isLoggedIn={setIsLoggedIn} />} />
//         <Route path="/admin" element={<AdminLogin />} />
//         <Route path="/admindashboard" element={<AdminDashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Login from './components/Login.js';
import './components/Login.css';
import Signup from './components/Signup.js';
import './components/Signup.css';
import Dashboard from './components/Dashboard.js';
import './components/Dashboard.css';
import AdminDashboard from './components/Admindashboard';
import AdminLogin from './components/Adminlogin';
import './components/Admindashboard.css';
import './components/Adminlogin.css';
import CreateAccount from './components/CreateAccount';
import './components/CreateAccount.css';
import Navbar from './components/Navbar';


function App() {

  const [userName, setUserName] = useState('');

  
  return (
   
      <div className="App">

        <Navbar/>
       
          {/* <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item"><Link to="/login">Login</Link></li>
              <li className="nav-item"><Link to="/signup">Signup</Link></li>
              <li className="nav-item"><Link to="/admin">Admin</Link></li>
            </ul>
          </nav> */}


        <Routes>
          <Route path="/login" element={<Login setUserName={setUserName}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/create-account" element={<CreateAccount userName={userName} />} />
        </Routes>
      </div>
    
  );
}

export default App;
