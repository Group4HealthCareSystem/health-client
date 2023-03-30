import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useState } from 'react';
import axios from "axios";


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
        navigate ("/Dashboard");

      })
      .catch(error => {
        console.error(error);
        setError('Invalid email or password');
        
      });
  }

    return ( 
        <div className='create-login'>
            {/* <section className='login-box'> */}
                <h1 id='wlc-back'>Welcome back</h1>
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

                        <div className="about-to">
                                <span>Create Account? </span>
                            <li id="link"> <Link to="/sign-up">SignUp</Link></li>
                        </div>

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