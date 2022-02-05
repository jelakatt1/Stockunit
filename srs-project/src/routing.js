import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authCheck } from "./redux/All_Reducers/authActionCreator";
import { Route, Routes, Navigate } from "react-router-dom";

import Payment from "./Pages/Payment/Payment";
import Login from "./Pages/User/Login/Login";
import Signup from "./Pages/User/Signup/Signup";
import Forgot from "./Pages/User/Forgot/Forgot";
import ForgotConfirmation from "./Pages/User/Forgot/ForgotConfirmation";
import ResetPassword from "./Pages/User/Forgot/ResetPassword";
import ResetConfirmation from "./Pages/User/Forgot/ResetConfirmations";
import Survey from "./Pages/Survey/Survey";
import Members from "./Pages/Members/Members";
import Friends from "./Pages/Friends/Friends";
import Profile from "./Pages/Profile/Profile";
import Admin from "./Pages/Admin/Admin";
import MemberProfile from "./Pages/Members/MemberProfile";

const Routing = () => {

    const dispatch = useDispatch();
    const { userId } = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(authCheck());
    }, [userId])

    let user_routes = null;

    if (userId) {
        user_routes = <Routes>
            <Route path="/members" element={<Members />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/memberprofile/:id" element={<MemberProfile />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>;
    }
    else {
        user_routes = <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/forgotConfirmation" element={<ForgotConfirmation />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/resetConfirmation" element={<ResetConfirmation />} />
            <Route path="/members" element={<Members />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/memberprofile/:id" element={<MemberProfile />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>;
    }

    return <div>
        {user_routes}
    </div>
    
};

export default Routing;
