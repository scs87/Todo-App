import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">My Website</div>
      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="navbar__login">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;