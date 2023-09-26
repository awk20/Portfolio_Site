import React from 'react';
import FindMeJobs from "./FindMeJobs.png";
import SymphonicSeats from "./SymphonicSeats.png";
import Fat32 from "./Fat32FileSystem.png";
 
export default function Projects(){

    return (
        <div className="projects-div">
            <div className="project-pars">
                <h3 id="projects" className="projects-title">What Have I Worked On?</h3>
                <p className="projects-p">
                    Through the years I have been learning software development, I have worked individually and 
                    collaboratively on a variety of projects that have strengthened my skills in building real-world
                    applications. Some of which are still maintained by myself, but others that are mostly source code at
                    this point. 
                </p>
            </div>
            <div className="projects-projects">
                <div className="projects-item">
                    <div>
                        <img src={SymphonicSeats} alt="" style={{height: "200px", width: "350px"}}/>
                        <div>
                            <h5>Symphonic Seats</h5>
                            <p>
                                Symphonic Seats is a personal project of mine built to mimick the process
                                of purchaisng concert tickets. For this project, I used C#, ASP.NEt Core, 
                                HTML, CSS, and SQL Server components to build a fully functioning application.
                                Symphonics Seats allows user to register or login with email and password to 
                                browse and purchase concert tickets with the help of the Stripe API. The Stripe API
                                allows for seamless pruchasing of a variety of items. The application also has
                                and admin feature to allow an admin user to delete, update, and add new concerts 
                                to the database of events. Overall, this project helped me develop my skills in
                                full-stack development as well as in C# and ASP.NET Core. 
                            </p>
                            <button class="button-1"><a className="project-button-link" href="https://github.com/awk20/Symphonic_Seats">Source Code</a></button>
                            <p></p>
                            <button class="button-1"><a className="project-button-link" href="https://symphonicseats.azurewebsites.net">Deployed App</a></button>
                        </div>
                    </div>
                </div>
                <div className="projects-item">
                    <div>
                    <img src={FindMeJobs} alt="FindMeJobs" style={{height: "200px", width: "350px"}}/>
                    <div >
                        <h5>Find Me Jobs</h5>
                        <p> 
                            Find Me Jobs is another personal project of which I developed my skills in 
                            Javascrip, React, Node.js, HTML, and CSS. This was another full-stack application
                            to help in my job search. This project uses the Adzuna API to allow users to 
                            search for job openings based on jeyword searches. The application also allows users
                            to specialize there searches with specifications to which U.S. state they wish to look
                            for jobs in. Find Me Jobs lists out the jobs based on the search specifications and
                            allows users to save their desired job opening posts in their own "Saved Jobs" tab 
                            of the application. 
                        </p>
                        <button class="button-1"><a className="project-button-link" href="https://github.com/awk20/Job-Search">Source Code</a></button>
                        <p></p>
                        <button class="button-1"><a className="project-button-link" href="https://heroic-lebkuchen-e536a7.netlify.app/">Deployed App</a></button>
                    </div>
                </div>
                </div>
                <div className="projects-item">
                 <div>
                    <div>
                        <img src={Fat32} alt="" style={{height: "200px", width: "350px", border: "none"}}/>
                        <h5>FAT32 File System</h5>
                        <p> 
                            The FAT32 File System was a project I collaborated on for a college credit. In this project,
                            I collaborated with two other classmates to build a FAT32 File System to interpret, display,
                            and manipulate files in a FAT32 file system. The project allowed a user to input a 
                            variety of commands to read, edit, create, and delete files and directories within the file 
                            system utilizing the linux shell. This project imoproved my skills in C and in working in a team.
                            Collaborating on code was a newer concept to me at the time and this project helped improve
                            my communication skills when working with fellow developers. 
                        </p>
                        <button class="button-1"><a className="project-button-link" href="https://github.com/FSU-COP4610-Spring-2023/COP-4610-Project-3">Source Code</a></button>
                    </div>
                </div>
                </div>
                <div className="projects-item">
                 <div>
                    <div>
                    <img src="..." alt="" style={{height: "200px", width: "350px", display: "none"}}/>
                        <h5>Python News</h5>
                        <p> 
                            Python News was another project I developed collaboratively in college. This project used Python,
                            Flask, Gunicorn, and Firebase to offer users an application that allowed them to read through a 
                            variety of software related news articoes provided by our implementation of the HackerNews API. Users
                            were able to register and sign in thanks to our implementation of Auth0 to authroize and authenticate
                            them. From there, users could like and dislike articles based on their preferences and click links redirecting
                            them to the desired articles they wished to read. 
                        </p>
                        <button class="button-1"><a className="project-button-link" href="https://gitlab.com/ajk19e/python-project">Source Code</a></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}