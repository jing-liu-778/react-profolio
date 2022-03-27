import React from 'react';
import { img_1838 } from "components/images";


export default function AboutMe() {
  return (
    <div className="about-me-wrapper">
      <h1>About Me</h1>
      <div className="protfolio-image">
        <img src={img_1838} alt="protfolio" />
      </div>
      <p>
        I am a highly-motivated, diligent and reliable individual with a solid
        academic background in Electrical & Computer Engineering. Solutions
        oriented and competent technical professional in electronic design,
        system testing, and software testing.
        <br />
        <br />
        Familiar with IEEE/IEC Standards and Nuclear Regulatory Commission
        Regulatory Guidelines. Proficient in programming and Microsoft Office
        applications. Excellent communication, interpersonal and
        organizational skills. Strong sense of responsibility and team spirit.
      </p>
    </div>
  );
}
