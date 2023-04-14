import { Route, Routes } from "react-router-dom";
import Home from "../components/hero/home";
import SignUp from "../components/registration/signup";
import Login from "../components/registration/login/login";
import Dashboard from "../components/check-dashboard/check";
import PatientDashboard from "../components/dashboard/patient-dashboard/patient";
import BookAppointment from "../components/dashboard/patient-dashboard/appointments/book-appointment";
import ProfileUpdateForm from "../components/dashboard/patient-dashboard/update-profile/updateProfile";
import { createContext, useState } from "react";

export const TokenContext = createContext("")

const RoutePage = () => {

    const [token, setToken] = useState("")


    return ( 
        <>
        <TokenContext.Provider value={{token, setToken}}>
           <Routes>
                <Route path="/home" Component={Home} /> 
                <Route path="/sign-up" Component={SignUp} />
                <Route path="/login" Component={Login} />
                <Route path="/login" Component={Dashboard} />
                <Route path="/Dashboard" Component={Dashboard} />
                <Route path="/patient-dashboard" Component={PatientDashboard} />
                <Route path="/patient-dashboard"  Component={BookAppointment} />
                <Route path="/book-appointment" Component={BookAppointment} />
                <Route path="/ProfileUpdateForm" Component={ProfileUpdateForm} />
                {/* <Route path="/" */}
            </Routes> 
        </TokenContext.Provider>
        </>
     );
}
 
export default RoutePage;