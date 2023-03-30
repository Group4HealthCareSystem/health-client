import React from 'react';
import './home.css';
import Header from '../../reusables/header/header'; 
import Footer from '../../reusables/footer/footer';

const Home = () => {
    return ( 
        <div className='parent-container'>
            <Header />
            <div className='hero-page'>
                <h2 id='making'>Making <span style={{color: "white"}}>Health</span>  Care Better together</h2>
                <p id='about'>
                    The best reliable health service that enable patients connect with Doctors, Nurses regarding all kind of health issues globally.
                </p>
            </div>
            <div>
                {/* <Footer /> */}
            </div>
        </div>
     );
}
 
export default Home;