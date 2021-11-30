import React from 'react';
import Footer from './Footer';
import Form from './Form';
import List from './List';
import Header from './Header';
import './../styles/styles.css';

const Home = () => {
    return (
        <>
        <Header/>
        <div className="grid-container">
            <Form/>
            <List/>
        </div>
        <Footer/>
        </>
     );
}
 
export default Home;