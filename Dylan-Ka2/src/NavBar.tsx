import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import PATHS from "./PATHS";
import "./NavBar.css"


function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <>
        <nav className="navigation">
      <a href="/" className="brand-name">
        Cookie Clicker
      </a>
    
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/BiscuitClicker">ClickerCounter</a>
          </li>
          <li>
            <a href="/TemperatureChecker">TemperatureChecker</a>
          </li>
          <li>
            <a href="/CookieNumberCounter">Cookies:67234</a>
          </li>
          <li>

          </li>
        </ul>
      </div>
    </nav>
    

            

            <Outlet />
        </>
    );
}


export default NavBar;