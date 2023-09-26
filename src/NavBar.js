import React from "react";
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function NavBar(){
    return (
      <div>
        <nav className="navbar-main">
          <ul>
            <li>
              <a className="navbar-title" href="/">Anthony Knapik</a>
            </li>
            <li>
              <a className="navbar-sub-titles" href="#about">About</a>
            </li>
            <li>
              <a className="navbar-sub-titles" href="#lnf">Skillset</a>
            </li>
            <li>
              <a className="navbar-sub-titles" href="#projects">Projects</a>
            </li>
            <li>
              <a className="navbar-sub-titles" href="#contact">Contacts</a>
            </li>
            <a className ="navbar-socials-1" href="https://github.com/awk20">
              <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff", width: "24px", height: "24px"}} />
            </a>
            <a class="navbar-socials-2" href="https://www.linkedin.com/in/anthony-k-b00214121/">
              <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff", width: "24px", height: "24px"}} />
            </a>
          </ul>
        </nav>
      </div>
    );
}

export default NavBar;