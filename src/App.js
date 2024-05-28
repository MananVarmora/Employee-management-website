// Import your CSS file with styles
import React, { useState } from 'react';
import './App.css';
import { AdminDashboard } from './AdminDashboard';// Import the AdminDashboard component
import { Dashboard } from './Dashboard';// Import the Dashboard component
import EmployeeProfile from './EmployeeProfile'; // Import the EmployeeProfile component
import About from './About'; // Import the About component
import Contact from './Contact'; // Import the Contact component
import Projects from './Projects'; // Import the Projects component



const App = () => {
  const [currentPage, setCurrentPage] = useState('Dashboard'); // Change the initial page to AdminDashboard

  const setActivePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="horizontal-navbar">
        <div className="navbar-left">
          {/* Change the position and names of the buttons */}
          <button
            className={`navbar-button ${currentPage === 'AdminDashboard' ? 'active' : ''}`}
            onClick={() => setActivePage('AdminDashboard')}
          >
            Admin Dashboard
          </button>
          <button
            className={`navbar-button ${currentPage === 'Dashboard' ? 'active' : ''}`}
            onClick={() => setActivePage('Dashboard')}
          >
            Dashboard 
          </button>
          <button
            className={`navbar-button ${currentPage === 'EmployeeProfile' ? 'active' : ''}`}
            onClick={() => setActivePage('EmployeeProfile')}
          >
            Employee Profile
          </button>
          <button
           className={`navbar-button ${currentPage === 'projects' ? 'active' : ''}`} // Add a button for Projects
           onClick={() => setActivePage('projects')} // Set the active page to 'projects' when clicked
          >
            Projects
          </button>
          <button
            className={`navbar-button ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => setActivePage('about')}
          >
            About
          </button>
          
          <button
            className={`navbar-button ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => setActivePage('contact')}
          >
            Contact
          </button>
         
        </div>
        <div className="navbar-right">
          {/* Add the Log Out button */}
          <button className="logout-button">Log Out</button>
        </div>
      </div>

      <div className="content">
        {currentPage === 'EmployeeProfile' && (
         // Render the EmployeeProfile component when the EmployeeProfile link is active
         <EmployeeProfile />
        )}
        {currentPage === 'about' && (
          // Render the Dashboard component when the Dashboard link is active
          <About />
        )}
        {currentPage === 'contact' && (
          // Your contact page content
           // Render the Dashboard component when the Dashboard link is active
           <Contact />
        )}
        {currentPage === 'AdminDashboard' && (
          // Render the AdminDashboard component when the Admin Dashboard link is active
          <AdminDashboard />
        )}
        {currentPage === 'Dashboard' && (
          // Render the Dashboard component when the Dashboard link is active
          <Dashboard />
        )}
        {currentPage === 'projects' && (
         // Render the Projects component when the Projects link is active
         <Projects />
        )}
       
      </div>
     
    </div>
  );
};

export default App;
