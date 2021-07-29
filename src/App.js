import Header from './components/header/header';
import SecondaryHeader from './components/secondaryHeader/secondaryHeader';
import PageList from './components/PageList/PageList';
// import "@fortawesome/fontawesome-free/scss";
// import "@fortawesome/fontawesome-free/webfonts";

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import './App.scss';

/* importing images */
import linkedin_logo from "./images/linkedin-logo.png";
import figma from "./images/figma.png";
import coverImage from "./images/cover-image.jpg";
import invisionLogo from "./images/invision.png";
import sketch from "./images/sketch.png";
import dribble from "./images/dribble.png";
import behance from "./images/behance.png";
import overlap_studios from "./images/overlap studios.png";
import medium from "./images/medium.png";
import adobe from "./images/adobe.png";
import slack from "./images/slack.png";

console.log("this is fontawesome", FontAwesomeIcon);

function App() {

  const list = [
    {key:1,logo: invisionLogo, name: "inVision", company_type:"Internet", followers_count: "137K"},
    {key:2,logo: sketch, name: "Sketch", company_type:"Design", followers_count: "33K"},
    {key:3,logo: dribble, name: "Dribble", company_type:"Design", followers_count: "16.2K"},
    {key:4,logo: behance, name: "Behance", company_type:"Internet", followers_count: "67K"},
    {key:5,logo: medium, name: "Medium", company_type:"Online Media", followers_count: "10K"},
    {key:6,logo: adobe, name: "Adobe", company_type:"Computer Software", followers_count: "2.68M"},
    {key:7,logo: slack, name: "Slack", company_type:"Computer Software", followers_count: "582K"},
    {key:8,logo: overlap_studios, name: "Overlap Studios", company_type:"Information Technology & Services", followers_count: "105K"}
  ];


function showProfileGroupIcon(element) {
    const [icon] = element.querySelectorAll("span.fa");

    if (icon.style.display === "block") {
        icon.style.display = "none";
    } else {
        icon.style.display = "block";
    }
}

function toggleProfileGroupList(icon) {
    const list = icon.parentElement.nextElementSibling;
    const link = list.nextElementSibling;

    if (icon.className === "fas fa-angle-up") {
        icon.className = "fas fa-angle-down";
        list.style.display = "none";
        if (link) {
            link.style.display = "none";
        }
    } else {
        icon.className = "fas fa-angle-up";
        list.style.display = "block";
        if (link) {
            link.style.display = "block";
        }
    }
}

function showRecommendationsInfo(element) {
    const [div, span, square] = element.children;

    if (div.style.display === "block") {
        div.style.display = "none";
        span.style.display = "none";
        square.style.display = "none";
    } else {
        div.style.display = "block";
        span.style.display = "block";
        square.style.display = "block";
    }
}

function waitPageLoading() {
    setTimeout(function() {
        const loadingPage = document.getElementById("loading-page");
        const [container] = document.getElementsByClassName("container");
        const header = document.getElementById("main-header").firstElementChild;

        loadingPage.style.display = "none";
        header.style.display = "flex";
        container.style.display = "grid";

        if (navigator.appVersion.indexOf("Chrome/") != -1) {
            const profileName = document.getElementById("profile-name");
            const postAuthorName = document.getElementById("post-author-name");

            const profileSquare = document.getElementById("profile-square");

            const elements = [profileName, postAuthorName];

            console.log(elements);

            // elements.map((element) => {
            //     element.classList.add("letter-spacing");
            // });

            profileSquare.classList.add("font-16");
        }
    }, 2000);
}

window.addEventListener("scroll", (e) => {
    const profileGroup = document.getElementById("profile-groups");
    const linkedinSection = document.getElementById("linkedin-section");
    const rightAside = document.getElementById("right-aside");

    // if (window.scrollY > 356) {
    //     profileGroup.classList.add("position-fixed");
    //     linkedinSection.classList.add("position-fixed", "right-aside-fixed");
    //     rightAside.classList.add("vanish");
    // } else {
    //     profileGroup.classList.remove("position-fixed");
    //     linkedinSection.classList.remove("position-fixed", "right-aside-fixed");
    //     rightAside.classList.remove("vanish");
    // }
});
waitPageLoading();




  return (
    <div className="App">
    <Header/>
    <SecondaryHeader/>
    

    
{/* Loading page */}
    <div id="loading-page">
        <div>
            <img src={linkedin_logo} alt="" />
            <div id="dot-loader">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- MAIN CONTAINER --> */}
    <div className="container">
        {/* <!-- LEFT ASIDE --> */}
        <div id="left-aside-wrapper">
            <aside id="left-aside">
                <div id="profile-card">
                    <div id="background"></div>
                    <div id="profile-info">
                        <img
                            src={figma}
                            alt="Profile"
                        />
                        <strong id="profile-name"
                            >Maurício Mendes Rossi</strong
                        >
                        <small>Front-End Developer</small>
                    </div>
                    <div id="profile-links">
                        <a href="/">
                            <span>
                                Who's viewed your profile
                            </span>
                            <span className="profile-number">
                                102
                            </span>
                        </a>
                        <a href="/">
                            <span>
                                Connections
                            </span>
                            <span className="profile-number">
                                452
                            </span>
                        </a>
                    </div>
                    <span>Grow your network</span>
                    <a href="/">
                        <span>Access exclusive tools & insights</span>
                        <span id="profile-premium">
                            <span id="profile-square">■</span> Try Premium
                            Free for 1 Month</span
                        >
                    </a>
                </div>
                <div id="profile-groups">
                    <section>
                        <header
                            onMouseOver={() => showProfileGroupIcon(this)}
                            onMouseOut={()=> showProfileGroupIcon(this)}
                        >
                            <span>Recent</span>
                            <span
                                className="fas fa-angle-up"
                                onClick={() => toggleProfileGroupList(this)}
                            ></span>
                        </header>
                        <ul className="group-list">
                            <li>
                                <span className="fas fa-users"></span>
                                <span>React Developers</span>
                            </li>
                            <li>
                                <span className="fas fa-hashtag"></span>
                                <span>javascript</span>
                            </li>
                            <li>
                                <span className="fas fa-hashtag"></span>
                                <span>webdevelopment</span>
                            </li>
                            <li>
                                <span className="fas fa-users"></span>
                                <span>Javascript Brasil</span>
                            </li>
                            <li>
                                <span className="fas fa-users"></span>
                                <span>Dog Lovers</span>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <header
                            onMouseOver={() => showProfileGroupIcon(this)}
                            onMouseOut={() => showProfileGroupIcon(this)}
                        >
                            <span className="group-title">Groups</span>
                            <span
                                className="fas fa-angle-up"
                                onClick={()=>toggleProfileGroupList(this)}
                            ></span>
                        </header>
                        <ul>
                            <li>
                                <span className="fas fa-users"></span>
                                <span id="aaaa">React Developers</span>
                            </li>
                            <li>
                                <span className="fas fa-users"></span>
                                <span>Javascript Brasil</span>
                            </li>
                            <li>
                                <span className="fas fa-users"></span>
                                <span>Dog Lovers</span>
                            </li>
                        </ul>
                        <div className="group-list">
                            <a href="/">See all</a>
                        </div>
                    </section>
                    <section>
                        <header
                            onMouseOver={() => showProfileGroupIcon(this)}
                            onMouseOut={() => showProfileGroupIcon(this)}
                        >
                            <span className="group-title">
                                Followed Hashtags</span
                            >
                            <span
                                className="fas fa-angle-up"
                                onClick={() => toggleProfileGroupList(this)}
                            ></span>
                        </header>
                        <ul>
                            <li>
                                <span className="fas fa-hashtag"></span>
                                <span>javascript</span>
                            </li>
                            <li>
                                <span className="fas fa-hashtag"></span>
                                <span>webdevelopment</span>
                            </li>
                        </ul>
                        <a href="/">See all</a>
                    </section>
                    <a href="/">Discover more</a>
                </div>
            </aside>
        </div>
        {/* <!-- MAIN --> */}
        <div id="main-wrapper">
            <main id="main-section">
                <div className="profile-container">
                    <div className="profile-cover-container">
                        <img className="profile-image" src={coverImage} alt="" />
                    </div>
                    <div className="profile-image-container">
                            <img className="profile-image" src={figma} alt=""/>
                    </div>

                   
                    <div className="details-container">
                        <h1>Figma</h1>
                        <p style={{color: "#7d7d7d", fontWeight: "16px"}}>A Design Platform for teams who build product together</p>
                        <p style={{color: "#cecece", fontWeight: "14px"}}>Design . San Francisco, CA . 101,282 Followers </p>
                        <a href="/">
                            <p style={{color: "#0a66c2", fontWeight: "bold"}}>See all 352 employees on Likedin </p>
                        </a>

                        <div style={{display: "flex"}}>
                            <button className="button linkedin-follow-btn">
                                <i className="fas fa-eye" style={{marginRight:"5px"}}></i>
                                Follow
                            </button>
                            <button className="button visit-website-btn">
                                <i className="fas fa-external-link-alt" style={{marginRight:"5px", color: "#0a66c2"}}></i>
                                Visit Website
                            </button>
                        </div>
                    </div>
                </div>

                <div className="profile-link-container">
                    <ul className="profile-link-list">
                        <li>
                            <a href="/">Overview</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Products</a>
                        </li>
                        <li>
                            <a href="/">Posts</a>
                        </li>
                        <li>
                            <a href="/">Jobs</a>
                        </li>
                        <li>
                            <a href="/">People</a>
                        </li>
                        <li>
                            <a href="/">Videos</a>
                        </li>
                    </ul>
                </div>

                <div className="about-container">
                    <h3>About</h3>
                    <p>Figma is the first professional-grade online tool created specifically for interface designs, Born on the web, Figma helps  the entire product team create, test, and ship better designs, faster. </p>
                    <div className="company-details-card-container">
                        <div className="company-details-container">
                            <p>Website Url</p>
                            <a href="/" style={{textAlign: "left", width:"100%", position: "absolute",bottom: "1rem"}}>
                                <p className="link-text">Figma.com</p>
                            </a>
                        </div>
                        <div className="company-details-container">
                            <p>Funding via Crunchbase</p>
                            <p>Series D</p>
                            <a href="/" style={{textAlign: "left", width:"100%"}}>
                                <p className="link-text">USD $50 M</p>
                            </a>
                        </div>
                    </div>
                    <a href="/" style={{textAlign: "center", width:"100%", position: "absolute", bottom:"2rem", left:"0"}}>
                        <p className="link-text">See all details</p>
                    </a>
                </div>
            </main>
        </div>
        {/* <!-- RIGHT ASIDE --> */}
        <aside id="right-aside">
            <div id="rec-section">
                <div>
                    <header>
                        <span>Pages People also viewed</span>
                    </header>
                    <div>

                      {
                        list.map((company) => <PageList logo={company.logo} name={company.name} company_type={company.company_type} followers_count={company.followers_count} />)
                      }
                         {/* <div>
                            <img src={invisionLogo} alt="" />
                            <div>
                                <strong>inVision</strong>
                                <small>Internet - 137K followers</small>
                            </div>
                                <i className="fas fa-eye" style={{marginRight:"5px"}}></i>

                        </div>
                        <div>
                            <img src={sketch} alt="" />
                            <div>
                                <strong>Sketch</strong>
                                <small>Design - 33K followers</small>
                            </div>
                                <i className="fas fa-eye" style={{marginRight:"5px"}}></i>

                        </div>
                        <div>
                            <img src={dribble} alt="" />
                            <div>
                                <strong>Dribble</strong>
                                <small>Design - 16.2K followers</small>
                            </div>
                                <i className="fas fa-eye" style={{marginRight:"5px"}}></i>

                        </div>
                        <div>
                            <img src={behance} alt="" />
                            <div>
                                <strong>Behance</strong>
                                <small>Internet - 67K followers</small>
                            </div>
                                <i className="fas fa-eye" style={{marginRight:"5px"}}></i>

                        </div>

                        <div>
                            <img src={overlap_studios} alt="" />
                            <div>
                                <strong>Overlap Studios</strong>
                                <small>Information Technology & Services - 105 followers</small>
                            </div>
                                <i className="fas fa-eye" style={{marginRight:"5px"}}></i>

                        </div>

                        <div>
                            <img src={medium} alt="" />
                            <div>
                                <strong>Medium</strong>
                                <small>Online Media - 10K followers</small>
                            </div>
                                <i className="fas fa-eye" style={{marginRight:"5px"}}></i>

                        </div>
                        <div>
                            <img src={adobe} alt="" />
                            <div>
                                <strong>Adobe</strong>
                                <small>Computer Software - 2.68M followers</small>
                            </div>
                                <i className="fas fa-eye" style={{marginRight:"5px"}}></i>

                        
                        
                         </div>
                         <div>
                            <img src={slack} alt="" />
                            <div>
                                <strong>Slack</strong>
                                <small>Computer Software - 582K followers</small>
                            </div>
                                <i className="fas fa-eye" style={{marginRight:"5px"}}></i>

                        </div> */}
                    </div>
                </div>
            </div>
            <div id="linkedin-section">
                <footer>
                    <ul>
                        <li>About</li>
                        <li>Accessibility</li>
                        <li>Help Center</li>
                        <li>
                            Privacy & Terms<span
                                className="fas fa-angle-down"
                            ></span>
                        </li>
                        <li>Ad choices</li>
                        <li>Advertising</li>
                        <li>
                            Business Services
                            <span className="fas fa-angle-down"></span>
                        </li>
                        <li>Get the LinkedIn app</li>
                    </ul>
                    <div>
                        <strong>Linked<span>in</span></strong>
                        <span>LinkedIn Corporation © 2021</span>
                    </div>
                </footer>
            </div>
        </aside>
    </div>
    </div>
  );
}

export default App;
