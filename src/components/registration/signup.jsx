import React from "react";
import { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import './signup.css';
import Header from "../../reusables/header/header";


const SignUp = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })


    const handleChange = (event) => {
        const {name , value} = event.target;

        setUserData(prevValue => {
            return {...prevValue, [name]:value}
        })}

    const registrationEndPoint ="http://localhost:8000/auth/users/";

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
           
            if(userData.password.length <= 5) alert("Password too short");
            
            let sendData = {
                first_name:userData.first_name,
                last_name:userData.last_name,
                email:userData.email,
                password:userData.password
            }
            console.log(sendData);
    
            await axios.post(registrationEndPoint, sendData)
     
                alert("Registration Successful");
                navigate("/login")
    
        } catch (error) {
            alert(`${error.message}`);

        }
           }    

    return ( 
        <div className="container">

            <Header />
                <div className="sign-up-box">
                    <span id="reg"><h1>Register</h1></span>
                    <form>
                        <input 
                            required
                            type="text" 
                            name="first_name" 
                            id="first_name" 
                            placeholder='first name'
                            value={userData.first_name}
                            onChange={handleChange}
                        />

                        <input 
                            required
                            type="text" 
                            name="last_name" 
                            id="last_name" 
                            placeholder='last name'
                            value={userData.last_name}
                            onChange={handleChange}
                        />

                        <input 
                            required
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder='email'
                            value={userData.email}
                            onChange={handleChange}
                        />

                        <input 
                            required
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder='password'
                            value={userData.password}
                            onChange={handleChange}
                        />

                        <div className="already">
                            <span>Already have an Account? </span>
                            <li id="link"> <Link to="/login">LogIn</Link></li>
                        </div>

                        <div id="btn">
                            <button className="btn-bg" type="submit" onClick={handleSubmit}
                            
                            >Sign Up</button>
                        </div>
                    </form>
              </div>
              
             
               
             
        </div>
     );
}
 
export default SignUp;