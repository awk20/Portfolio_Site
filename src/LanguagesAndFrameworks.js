import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode, faGit } from '@fortawesome/free-brands-svg-icons';
import CPlusPlus from "./c-.png";
import CSharp from "./c-sharp.png";
import C from "./c.png";
import Java from "./java.png";
import Javascript from "./javascript.png";
import Css from "./css.png";
import Html from "./html5.png";
import Python from "./python.png";
import ReactImg from "./react.png";
import Sql from "./sql.png";
import Bootstrap from "./bootstrap.png";
import Flask from "./flask.png";
import AspNetCore from "./aspnetcore.png";


export default function LanguagesAndFrameworks() {
    return (
        <div className="lnf-div">
            <div className="lnf-png">
                <img className="lnf-items" src={CPlusPlus} alt="c++"/>
                <img className="lnf-items" src={CSharp} alt="csharp"/>
                <img className="lnf-items" src={C} alt="c" style={{width:"128px", height: "128px"}}/>
                <img className="lnf-items" src={Java} alt="java"/>
                <img className="lnf-items" src={Javascript} alt="javascript"/>
                <img className="lnf-items" src={Python} alt="python"/>
                <img className="lnf-items" src={Sql} alt="sql" style={{width:"128px", height: "128px"}}/>
                <img className="lnf-items" src={Html} alt="html5"/>
                <img className="lnf-items" src={Css} alt="css"/>
                <img className="lnf-items" src={ReactImg} alt="react"/>
                <img className="lnf-items" src={Bootstrap} alt="bootstrap"/>
                <img className="lnf-items" src={Flask} alt="flask"/>
                <img className="lnf-items" src={AspNetCore} alt="aspnetCore"/>
                <FontAwesomeIcon icon={faNode} style={{color: "#fb324f", width: "128px", height: "128px"}} />
                <FontAwesomeIcon icon={faGit} style={{color: "#fb324f", width: "128px", height: "128px"}} />
            </div>
            <div className="lnf-pars">
                <h3 id="lnf" className="lnf-title">What do I know?</h3>
                <p className="lnf-p">
                    Through pursuing my degree in computer science as well as in my own time,
                    I have developed skills and experience in a variety of programming languages
                    and frameworks. The strongest of which are included in in this section.  
                </p>
                <p className="lnf-p">
                    Languages I learned predominately in college include C++, C, Python, and Java.
                    Outside of the classroom, I spent my own time developing skills in C#, Javascript, 
                    SQL, HTML, and CSS. In addition, I have invested my time into practicing and 
                    developing my abilities in frameworks and libraries like React, ASP.NET Core, 
                    Flask, Node.js, and Gunicorn. Doing so has given me a desire to contonue learning
                    more and becoming the best developer I can be. All togther, the time and dedication I 
                    put into learning these tools and putting them to real use has made me into a superior 
                    problem solver and application developer. 
                </p>
            </div>
        </div>
    );
}