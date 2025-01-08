import React from "react"
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import Github from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home(){
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, My Name is Lucien</h2>
                <div className="prompt">
                    <p>
                        A software developer with a passion for learning and creating.
                    </p>
                    <LinkedIn />
                    <Email />
                    <Github />
                </div>
            </div>
            <div className="skills"></div>
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, HTML, CSS
                        </span>
                    </li>
                    <li className="item">
                        <h2> Back-End</h2>
                        <span> 
                            NodeJS, Springboot, Django, MySQL    
                        </span>
                    </li>
                    <li className="item">
                        <h2> Languages</h2>
                        <span> 
                            JavaScript, Java, Python, C, C++
                        </span>
                    </li>
                </ol>
        </div>
    );
}

export default Home