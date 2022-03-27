import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
const Footer = () => (

    <footer className="text-center text-white footer-wrapper" style={{'background-color': '#f1f1f1'}}>
        <div className="container pt-4">
            <section className="mb-4">
            <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/jing-liu-778"
                role="button"
                data-mdb-ripple-color="dark">
                <FontAwesomeIcon className="fa-2xl" icon={faGithub} />
            </a>
            <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark">
                <FontAwesomeIcon className="fa-2xl" icon={faLinkedin} />
            </a>
            <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark">
                <FontAwesomeIcon className="fa-2xl" icon={faStackOverflow} />
            </a>
            </section>
        </div>

        <div className="text-center text-dark p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
            
            © 2022 Copyright: {` `}
            <a className="text-dark" href="#!">JingLiu</a>
        </div>
        </footer>
);

export default Footer;