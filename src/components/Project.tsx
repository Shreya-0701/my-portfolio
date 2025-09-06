import React from "react";
import ss1 from '../assets/images/ss1.png';
import mama2 from '../assets/images/mama2.png';
import car from '../assets/images/car.png';
import PROXY from '../assets/images/PROXY.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://github.com/Shreya-0701/Shopsy" target="_blank" rel="noreferrer">
                    <img src={ss1} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/Shreya-0701/Shopsy" target="_blank" rel="noreferrer">
                    <h2>Shopsy (E-Commerce)</h2>
                </a>
                <p>
                    Developed an e-commerce platform using the MERN stack, featuring real-time product listings, secure user authentication, and seamless cart management. Integrated backend APIs for dynamic data handling and responsive design for a smooth user experience.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/Shreya-0701/Mamas-Reminder" target="_blank" rel="noreferrer">
                    <img src={mama2} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/Shreya-0701/Mamas-Reminder" target="_blank" rel="noreferrer">
                    <h2>Mama's Reminder 🛒📅</h2>
                </a>
                <p>
                    Mama's Reminder is an Android application built using Java and Android Studio. It helps users track the expiry dates of household products and sends timely notifications before the product expires. Key features include adding, editing, and deleting products, local notifications, and a simple UI to help keep a home stocked and waste-free. The tech stack includes Android SDK, AlarmManager, BroadcastReceiver, and SQLite for storage.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/Shreya-0701/Car-Renting" target="_blank" rel="noreferrer">
                    <img src={car} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/Shreya-0701/Car-Renting" target="_blank" rel="noreferrer">
                    <h2>Car-Renting</h2>
                </a>
                <p>
                    A Java-based console application that serves as a learning and simulation tool for a car rental system. Key features include renting and returning cars, customer and car management, and keeping track of rental history.
                </p>
            </div>
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
                    <img src={PROXY} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
                    <h2>Multithreaded Proxy Server</h2>
                </a>
                <p>
                    Developed a high-performance proxy server solution to efficiently manage concurrent client requests, prioritizing real-time response handling. Integrated advanced synchronization techniques like semaphores, locks, and an HTTP parser.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;
