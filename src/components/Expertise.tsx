import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava } from '@fortawesome/free-brands-svg-icons'; // removed faPython
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst= [
    "Java",
    "Spring Boot",
    "Quarkus",
    "HTML",
    "CSS",
    "React",
    "SQL",
    "MongoDB",
    "AWS",
    "Git",
    "GitHub",
    "Microservices",
    "OOPS",
    "API Design",
    "JUnit",
    "Mockito",
    "SoapUI"
];

const labelsSecond = [
    "Java",
    "Quarkus",
    "Spring Boot",
    "RESTful APIs",
    "Microservices",
    "Multithreading",
    "Multiprocessing",
    "Data Structures and Algorithms"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have professional experience in building scalable backend systems and RESTful APIs using Java and modern frameworks. I have also worked with front-end technologies to create dynamic and responsive user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Backend Engineering</h3>
                    <p>My focus is on designing and developing robust and scalable backend systems. I am adept at creating clean, efficient, and modular code that adheres to best practices and supports high-performance applications</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
