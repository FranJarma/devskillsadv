import React from 'react';
import './../styles/styles.css';

const Header = () => {
    return ( 
        <>
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/other-page">Other Page</a>
            </div>
        </>
    );
}
 
export default Header;