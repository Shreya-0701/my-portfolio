import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myImage from '../assets/images/image meri.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Shreya-0701" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shreya-sharma-393063227/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Shreya Sharma</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Shreya-0701" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shreya-sharma-393063227/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;