import React from 'react';
import Prog from "./web-prog.png";

export default function About() {
    return (
        <div className="about-div">
            <div className="about-pars">
                <h3 id="about" className="about-title">Who am I?</h3>
                    <p className="about-p">
                        While in college I began my journey in software development when I started 
                        taking computer science courses for a minor I was completing. I quickly discovered 
                        a passion for programming and problem solving as a result. From there I was hooked.
                        I ended up beginning and completing a bachelors degree in computer science soon after,
                        and I continue to develop my skills in software development everyday out of a love of
                        the process. 
                    </p>
                    <p className="about-p">
                        To this day, I am continuing to further my skills in a variety of programming languages
                        and frameworks while working on personal projects to help improve my skills as a devloper 
                        to hopefully join a software development team and contirbute in a professional setting. 
                    </p>
            </div>
            <div className="about-png">
                <img src={Prog} alt="prog" style={{height: "300px", width: "300px", maxWidth: "100%"}}/>
            </div>
        </div>
    );
}