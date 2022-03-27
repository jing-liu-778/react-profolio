import React from 'react';
import { JingLiuResume } from "components/images";

export default function Resume() {
  return (
    <div className="resume-wrapper">
      <div>
        <h1>Resume</h1>
        <p className="download-resume-wrap">
          Download my 
          <a className="resume-download" href={`${JingLiuResume}`} download>
            resume
          </a>
        </p>
        
      </div>
      <div>
        <h2 className="title">Front-end</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div>
        <h2 className="title">Back-end</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
