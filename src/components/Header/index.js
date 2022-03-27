import React from 'react';
import Navigation from '../Navigation';

const Header = ({currentPage, handlePageChange}) => {
    return(
    <div className="headr-block">
        <h1>Jing Liu</h1>
        <Navigation 
            currentPage={currentPage} 
            handlePageChange={handlePageChange} />
    </div>
    );
};

export default Header;