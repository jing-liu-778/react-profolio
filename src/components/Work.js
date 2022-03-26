import React from "react";
import { code_quiz, disaster_factor, flixandSpill, screenshot_2 } from "images";

const Work = () => {
  return (
    <section className="section-container">
      <h2 id="work" className="sectionTitle">
        Work
      </h2>
      <div className="content-wrapper flex-column">
        <div className="link-images-wrapper-md">
          <div className="container">
            <a
              href="https://jing-liu-778.github.io/Disaster-Factor/"
              className="main-image-link"
            >
              <img
                id="disaster-factor"
                className="projectImage1"
                src={disaster_factor}
                alt="disaster-factor project"
              />
              <div className="text-block">
                <h4>Disater Factor</h4>
                <p>JavaScript/CSS/HTML</p>
                <p className="insidelink">
                  https://github.com/jing-liu-778/Disaster-Factor
                </p>
              </div>
            </a>
          </div>

          <div className="container">
            <a
              href="https://shielded-gorge-65326.herokuapp.com/"
              className="main-image-link"
            >
              <img
                id="flixandspill"
                className="projectImage1"
                src={flixandSpill}
                alt="flixandspill project"
              />
              <div className="text-block">
                <h4>Flix and Spill</h4>
                <p>JavaScript/Node.js/CSS/HTML</p>
                <p className="insidelink">
                  https://github.com/jing-liu-778/Flix-and-Spill
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="link-images-wrapper-md">
          <div className="container">
            <a href="https://mimitale.com/login" className="container">
              <img
                id="mimitale"
                className="linkImage"
                src={screenshot_2}
                alt="Mimitale project"
              />
              <div className="text-block">
                <h4>Mimitale</h4>
                <p>React/JavaScript/CSS</p>
              </div>
            </a>
          </div>
          <div className="container">
            <a href="https://jing-liu-778.github.io/Code-Quiz/">
              <img
                id="project3"
                className="linkImage"
                src={code_quiz}
                alt="code-quiz project"
              />
            </a>
            <a
              href="https://github.com/jing-liu-778/Code-Quiz"
              className="link-color"
            >
              <div className="text-block">
                <h4>Code Quiz</h4>
                <p>JavaScript/CSS/HTML</p>
                <p className="insidelink">
                  https://github.com/jing-liu-778/Code-Quiz
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
