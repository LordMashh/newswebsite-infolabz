import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames"; // Import the classnames library
import "../App.css";

function Nav() {
  const location = useLocation();
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="w-11/12 max-w-[1160px] mx-auto flex flex-col md:flex-row justify-between items-center py-4">
      <div className="flex justify-between mx-auto items-center">
        <h1 className="text-richblack-900 font-bold text-xl mr-8">
          <Link to="/">MY NEWS WEBSITE</Link>
        </h1>
        <button className="md:hidden" onClick={toggleNav}>
          {navVisible ? "Hide" : "Show"} Menu
        </button>
      </div>
      <nav
        className={classNames(
          "md:flex md:gap-x-6 text-richblack-900 md:ml-[200px] font-bold text-xl",
          { "md:block": navVisible, hidden: !navVisible }
        )}
      >
        <ul className="flex flex-col md:flex-row gap-y-4 md:gap-x-6">
          <NavItem to="/" label="All" currentPath={location.pathname} />
          <NavItem
            to="/top"
            label="top"
            currentPath={location.pathname}
          />
          <NavItem
            to="/entertainment"
            label="Entertainment"
            currentPath={location.pathname}
          />
          <NavItem
            to="/trending"
            label="trending"
            currentPath={location.pathname}
          />
          <NavItem
            to="/science"
            label="Science"
            currentPath={location.pathname}
          />
          <NavItem
            to="/sports"
            label="Sports"
            currentPath={location.pathname}
          />
        </ul>
      </nav>
    </div>
  );
}

const NavItem = ({ to, label, currentPath }) => {
  const isActive = to === currentPath;

  return (
    <li className={classNames("nav-item", { active: isActive })}>
      <Link
        to={to}
        className={classNames("nav-link", { underline: isActive })}
      >
        {label}
      </Link>
    </li>
  );
};

export default Nav;
