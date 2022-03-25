import "./App.css";
import {
  code_quiz,
  disaster_factor,
  flixandSpill,
  images,
  img_1838,
  screenshot_1,
  screenshot_2,
  screenshot_3,
} from "./images";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h1>Jing Liu</h1>
          <ul class="text-right">
            <li id="margin">
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact-me">Contact Me</a>
            </li>
            <li>
              <a href="./assets/Jing Liu's Resume.pdf" download>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div
        id="backgroud"
        style={{
          backgroundImage: `url(${images})`,
        }}
      >
        <span
          class="profileImage"
          style={{
            backgroundImage: `url(${img_1838})`,
          }}
        />
      </div>
      <main>
        <section className="section-container">
          <h2 id="about-me" className="sectionTitle">
            About Me
          </h2>
          <div className="content-wrapper">
            <p>
              I am a highly-motivated, diligent and reliable individual with a
              solid academic background in Electrical & Computer Engineering.
              Solutions oriented and competent technical professional in
              electronic design, system testing, and software testing.
              <br />
              <br />
              Familiar with IEEE/IEC Standards and Nuclear Regulatory Commission
              Regulatory Guidelines. Proficient in programming and Microsoft
              Office applications. Excellent communication, interpersonal and
              organizational skills. Strong sense of responsibility and team
              spirit.
            </p>
          </div>
        </section>

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

        <section className="section-container footer-space">
          <h2 id="contact-me" className="sectionTitle">
            Contact Me
          </h2>
          <div className="content-wrapper">
            <ul className="contact-links-wrapper">
              <li className="phone">Phone: 201.888.2635</li>
              <li>
                E-Mail:
                <a href="mailto:jingliu778@gmail.com">jingliu778@gmail.com</a>
              </li>
              <li>
                <a href="https://github.com/jing-liu-778">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jing-liu-eit/">Linkedin</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
