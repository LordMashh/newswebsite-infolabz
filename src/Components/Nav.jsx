import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames"; // Import the classnames library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, } from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons
import "../App.css";

function Nav() {
  const location = useLocation();
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };
  const closeNav = () => {
    setNavVisible(false);
  };

  const navItems = [
    { to: "/All", label: "All" },
    { to: "/Top", label: "Top" },
    { to: "/Hatke", label: "Hatke" },
    { to: "/National", label: "National" },
    { to: "/International", label: "International" },
    { to: "/Entertainment", label: "Entertainment" },
    { to: "/Business", label: "Business" },
    { to: "/Startup", label: "Startup" },
    { to: "/Trending", label: "Trending" },
    { to: "/Automobile", label: "Automobile" },
    { to: "/Science", label: "Science" },
    { to: "/Sports", label: "Sports" },
  ];
  const routeToLabel = {
    "/": "All News",
    "/All": "All News",
    "/Top": "Top News",
    "/Hatke": "Hatke News",
    "/National": "National News",
    "/International": "International News",
    "/Entertainment": "Entertainment News",
    "/Business": "Business News",
    "/Startup": "Startup News",
    "/Trending": "Trending News",
    "/Automobile": "Automobile News",
    "/Science": "Science News",
    "/Sports": "Sports News",
  };
  const currentLabel = routeToLabel[location.pathname] || "Unknown";

  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row py-4">
        <h1 className="text-richblack-900 font-bold text-xl">
          <Link to="/">MY NEWS WEBSITE </Link>
        </h1>
        
      </div>
      <div className="container mx-auto flex flex-col md:flex-row py-4">
      <h2 className="text-richblack-900 font-bold text-lg">
      {currentLabel}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row py-4">
        <div className="flex flex-col justify-between items-center">
          <button className="md:hidden" onClick={toggleNav}>
           Menu <span></span><FontAwesomeIcon icon={navVisible ? faTimes : faBars} />
          </button>
        </div>
        <nav className={classNames("md:flex md:gap-x-6 text-richblack-900 md:ml-[200px] font-bold text-xl", { "md:block": navVisible, hidden: !navVisible })}>
          <ul className="flex flex-col md:flex-row items-center flex-wrap gap-y-4 md:gap-x-6">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} currentPath={location.pathname} onClick={closeNav}/>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const NavItem = ({ to, label, currentPath, onClick }) => {
  const isActive = to === currentPath;

  return (
    <li className={classNames("nav-item", { active: isActive })}>
      <Link to={to} className={classNames("nav-link", { underline: isActive })} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};

export default Nav;
