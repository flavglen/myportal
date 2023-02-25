import React from 'react';
import { Navigate, NavLink, Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar: React.FC = () => {
  return  <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to='home'>Home</Link>
      </li>
      <li>
        <Link to='timeline'>Timeline</Link>
      </li>
      <li>
        <Link to='timeline'>Projects</Link>
      </li>
      <li>
         <Link to='timeline'>Skills</Link>    
      </li>
      <li>
        <Link to='timeline'>Contact</Link>  
      </li>
      <li>
        <Link to='timeline'>Gallery</Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
};

export default Sidebar;