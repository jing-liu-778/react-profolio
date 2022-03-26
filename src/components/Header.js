import React from "react";
import { JingLiuResume } from "images";
const Header = () => (
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
          <a href={`${JingLiuResume}`} download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
