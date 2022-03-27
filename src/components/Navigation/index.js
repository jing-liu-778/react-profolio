import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto navigation-bar">
          <li className="nav-item active">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange('AboutMe')}
              className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Protfolio"
              onClick={() => handlePageChange('Protfolio')}
              className={currentPage === 'Protfolio' ? 'nav-link active' : 'nav-link'}
            >
              Protfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
