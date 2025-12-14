import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';


const PrivateRouts = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (!user) {
        return <Navigate to='/sign' state={location.pathname} replace></Navigate>
    }

    return children;
};

export default PrivateRouts;