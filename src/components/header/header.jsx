import React from "react";
import linkedin_logo from "../../images/linkedin-logo.png";
import figma from "../../images/figma.png";

function Header(props) {
  function toggleSearchInput() {
    const button = document.getElementById("search-button");
    const icon = document.getElementById("search-icon");
    const input = document.getElementById("search");

    if (button.style.display === "block") {
      button.style.display = "none";
      icon.style.display = "block";
      input.placeholder = "       Search";
    } else {
      button.style.display = "block";
      icon.style.display = "none";
      input.placeholder = "";
    }
  }

  return (
    <header id="main-header">
      <div>
        <div>
          <img id="header-logo" src={linkedin_logo} alt="LinkedIn" />
          <img id="header-picture-menu" src={figma} alt="Profile" />
          <span id="header-picture-menu-bars">
            <span className="fas fa-bars"></span>
          </span>

          <div>
            <input
              id="search"
              type="text"
              placeholder="       Search"
              onFocus={toggleSearchInput}
              onBlur={toggleSearchInput}
            />
            <i id="search-icon" className="fas fa-search"></i>
            <i id="search-button" className="fas fa-search"></i>
          </div>
          {/* <!-- <span className="fas fa-comments"></span> --> */}
        </div>
        <nav>
          <ul>
            <li>
              <div>
                <span className="fas fa-bell"></span>
              </div>
            </li>
            <li>
              <div>
                <i className="fas fa-comment-dots"></i>
              </div>
            </li>
            <li>
              <div id="right-border">
                <img src={figma} alt="Profile" />
              </div>
            </li>
            <li>
              <div>
                <span className="fas fa-th"></span>
              </div>
            </li>
            <li id="premium">
              <div>
                <button className="button premium-button">
                  Upgrade to Premium
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
