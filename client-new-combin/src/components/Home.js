import React from 'react';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';
import './../styles/styles.css';

const Home = () => {
    return (
        <>
        <Header/>
        <div className="grid-container">
            <Main/>
        </div>
        <Footer/>
        </>
     );
}
 
export default Home;