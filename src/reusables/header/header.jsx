import './header.css';
import React from 'react';
import {MdHealthAndSafety} from "react-icons/md";
// import { BrowserRouter, Route, Routes, Link} from "react-router-dom";

const Header = () => {
    return ( 
        <div>
            <div className="nav-container">
            <div className='nav'>

                <div className="checkIcons">
                    <MdHealthAndSafety size="90"  color="white"/>
                    <span id='e-health'>E-health</span>
                    <h4 id='health-sol'>Medical Solution</h4>
                </div>

                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/sign-up">SignUp</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
                <span id='search-btn'>Search</span>
            </div>
            
            </div>
        </div>
     );
}
 
export default Header;