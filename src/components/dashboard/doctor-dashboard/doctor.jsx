import React from "react";
import { Link } from "react-router-dom";

const Doctor = () => {
    return ( 
        <div>
            <section>
                <li><Link to="/">Check Patients Health Records</Link></li>
                <li><Link to="/">View Pending Appproval</Link></li>
            </section>
        </div>
     );
}
 
export default Doctor;