import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../App.css";

function Nav() {
  const location = useLocation();

  return (
    <div className="w-11/12 max-w-[1160px] mx-auto flex flex-row justify-start items-center py-4">
      <div>
        <h1 className="text-richblack-900 font-bold text-xl">
          <Link to="/">MY NEWS WEBSITE</Link>
        </h1>
      </div>
      <nav>
        <ul className="flex gap-x-6 text-richblack-900 ml-[200px] font-bold text-xl">
          <NavItem to="/" label="All" currentPath={location.pathname} />
          <NavItem to="/Top" label="Top" currentPath={location.pathname} />
          <NavItem to="/Entertainment" label="Entertainment" currentPath={location.pathname} />
          <NavItem to="/Trending" label="Trending" currentPath={location.pathname} />
          <NavItem to="/Science" label="Science" currentPath={location.pathname} />
          <NavItem to="/Sports" label="Sports" currentPath={location.pathname} />
        </ul>
      </nav>
    </div>
  );
}

const NavItem = ({ to, label, currentPath }) => {
  const isActive = to === currentPath;

  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <Link to={to} className={`nav-link ${isActive ? 'underline' : ''}`}>
        {label}
      </Link>
    </li>
  );
};

export default Nav;
