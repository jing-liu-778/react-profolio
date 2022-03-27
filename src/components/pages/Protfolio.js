import React from 'react';
import { code_quiz, disaster_factor, flixandSpill, screenshot_2 } from "components/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Project = ({src, githubLink, webTitle, webUrl}) => (
  <div 
    className="project-wrapper"
    style={{
      'background-image':  `url(${src})`
    }}>
    <span className="project-content">
      <a
        href={webUrl}>
        <h3>
          {webTitle}
        </h3>
      </a>
      <a
        href={githubLink}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </span>
  </div>
);

export default function Protfolio() {
  return (
    <div className="protfolio-content-wrapper">
      <Project 
        src={disaster_factor}
        githubLink="https://github.com/jing-liu-778/Disaster-Factor"
        webTitle="Disater Factor"
        webUrl="https://jing-liu-778.github.io/Disaster-Factor/"
      />
      <Project 
        src={flixandSpill}
        githubLink="https://github.com/jing-liu-778/Flix-and-Spill"
        webTitle="Flix and Spill"
        webUrl="https://shielded-gorge-65326.herokuapp.com/"
      />
      <Project 
        src={screenshot_2}
        githubLink=""
        webTitle="Mimi Tale"
        webUrl="https://mimitale.com/login"
      />
      <Project 
        src={code_quiz}
        githubLink="https://jing-liu-778.github.io/Code-Quiz/"
        webTitle="code-quiz project"
        webUrl="https://github.com/jing-liu-778/Code-Quiz"
      />
    </div>
  );
}
