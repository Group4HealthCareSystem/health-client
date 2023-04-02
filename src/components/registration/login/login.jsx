import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useState } from 'react';
import axios from "axios";
import {MdArrowCircleRight} from "react-icons/md"
import Header from '../../../reusables/header/header';
import { TokenContext } from '../../../routes/route';


const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleChange = (event) => {
    const {name , value} = event.target;

    setFormData(prevValue => {
        return {...prevValue, [name]:value}
    })}

    const {token, setToken} = useContext(TokenContext);
    
    
  function handleSubmit(event) {
    event.preventDefault();

    const loginEndpoint = "http://localhost:8000/auth/jwt/create";

    let userData = {
        email:formData.email,
        password:formData.password
    }

    if(!formData || formData === "")
       return alert("Enter correct details")

    axios.post(loginEndpoint, userData)
      .then(response => {
        
        console.log(response);
        // console.log(response.data.access)
        let accessToken = response.data.access
        setToken(accessToken);
        navigate ("/Dashboard");

      })
      .catch(error => {
        console.error(error);
        setError('Invalid email or password');
        
      });
  }

    return ( 
        <div className='create-login'>
            <Header />
            {/* <section className='login-box'> */}
                <div className="about-to">
                    <li id="link"><Link to="/sign-up">Sign up instead </Link></li>
                    <MdArrowCircleRight className='icon' size="30" color="white" /> 
                </div>

                <h2 id='wlc-back'>Welcome back</h2>
                <form>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder='email'
                        onChange={handleChange}
                    />
                    <input 
                        type="password"
                        name='password'
                        id=''
                        placeholder='password'
                        onChange={handleChange}
                    />

                        

                        <div id="login-btn">
                        <button className="login-btn" type="submit" onClick={handleSubmit}
                        
                        >Login</button>
                    </div>
                </form>
            {/* </section> */}
        </div>
     );
}
 
export default Login;