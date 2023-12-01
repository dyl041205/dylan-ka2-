import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import PATHS from "./PATHS";



function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <>
        <nav className="navigation">
      <a href="/" className="brand-name">
        MacroSoft
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
            <a href="/BiscuitClicker">About</a>
          </li>
          <li>
            <a href="/TemperatureChecker">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    

            <nav>
                <ul>
                    <li>
                        <Link to={PATHS.Home_PATH}>Home</Link>
                    </li>
                    <li>
                        <Link to={PATHS.ClickerCounter_PATH}>ClickerCunter</Link>
                    </li>
                    <li>
                        <Link to={PATHS.TemperatureChecker_PATH}>TemperatureChecker</Link>
                    </li>
                  
                </ul>
            </nav>

            <Outlet />
        </>
    );
}


export default NavBar;