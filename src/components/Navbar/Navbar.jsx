import React from 'react'
import './Navbar.scss';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container d-flex">
        <img
          className='logo mt-15'
          src="/images/y-alphabet-icon.svg"
          alt="logo"
          width={100}
          height={45}
        />
        <h2>HackerNews</h2>
      </div>
    </nav>
  );
}

export default Navbar;