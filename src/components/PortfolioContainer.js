import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Protfolio from './pages/Protfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Protfolio') {
      return <Protfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="body">
      <Header 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        />
      {renderPage()}
      <Footer />
    </div>
  );
}
