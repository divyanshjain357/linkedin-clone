import React from 'react';
import figma from "../../images/figma.png";


function SecondaryHeader(props) {
    return (
        <header id="secondary-header">
        <div>
            <nav>
                <ul>
                    <li>
                        <div id="home" className="selected">
                            <span className="fas fa-home"></span>
                            <span className="nav-item-text">Home</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="fas fa-user-friends"></span>
                            <span className="nav-item-text">My Network</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="fas fa-suitcase"></span>
                            <span className="nav-item-text">Job Offers</span>
                        </div>
                    </li>
                    
                  
                    <li>
                        <div id="right-border">
                            <img
                                src={figma}
                                alt="Profile"
                            />

                            <span className="nav-item-text">
                                My Profile<span className="fas fa-caret-down"> </span
                            ></span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default SecondaryHeader;