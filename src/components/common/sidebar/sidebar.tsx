import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

interface props {
  menuClicked?: () => void
}

const Sidebar: React.FC<props> =  ({ menuClicked }) => {

  const closeMenu = () => {
    menuClicked && menuClicked();
  }

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link onClick={closeMenu} to='home'>Home</Link>
        </li>
        <li>
          <Link onClick={closeMenu} to='timeline'>Timeline</Link>
        </li>
        <li>
          <Link onClick={closeMenu} to='projects'>Projects</Link>
        </li>
        <li>
          <Link onClick={closeMenu} to='timeline'>Skills</Link>
        </li>
        {/* <li>
        <Link to='timeline'>Contact</Link>  
      </li>
      <li>
        <Link to='timeline'>Gallery</Link>
      </li> */}
      </ul>
      <hr />
    </div>
  )
};

export default Sidebar;