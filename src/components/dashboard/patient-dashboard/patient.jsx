import "./patient.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../reusables/header/header";

const PatientDashboard = () => {
    return ( 
        <div className="container">
            <Header />
            <div className="content-container">
                <section className="patient-section">
                    <li ><Link to="/ProfileUpdateForm">Update your profile</Link></li>
                    <li><Link to="/book-appointment">Book Appointment</Link></li>
                    <li><Link to="/lab-test">Book Lab Test</Link></li>
                    <li><Link to="/health-status">View Health Status</Link></li>
                </section>
            </div>           
        </div>
     );
}
 
export default PatientDashboard;