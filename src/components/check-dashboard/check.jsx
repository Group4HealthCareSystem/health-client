import "./check.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../reusables/header/header";

const Dashboard = () => {
    return (
        
        <>
        <Header />
       <section className="check">
            <div>
                <h3>Log in as a...</h3>
            </div>
           <Link to="/doctor-dashboard"> <button className="log-btn" type="submit">Medical Personnel</button></Link>
           <Link to="/patient-dashboard"> <button className="log-btn-2" type="submit">Patient</button></Link>

       </section>
        </>
    );
}
 
export default Dashboard;