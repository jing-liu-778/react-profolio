import React from "react";

const ContactMe = () => {
  return (
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
  );
};
export default ContactMe;
