import { Route, Routes } from "react-router-dom";
import Home from "../components/hero/home";
import SignUp from "../components/registration/signup";
import Login from "../components/registration/login/login";
import Dashboard from "../components/check-dashboard/check";
import PatientDashboard from "../components/dashboard/patient-dashboard/patient";

const RoutePage = () => {
    return ( 
        <>
           <Routes>
                <Route path="/home" Component={Home} /> 
                <Route path="/sign-up" Component={SignUp} />
                <Route path="/login" Component={Login} />
                <Route path="/login" Component={Dashboard} />
                <Route path="/Dashboard" Component={Dashboard} />
                <Route path="/patient-dashboard" Component={PatientDashboard} />
            </Routes> 
        </>
     );
}
 
export default RoutePage;