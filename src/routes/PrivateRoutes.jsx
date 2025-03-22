import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authproviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner text-primary"></span>        
    }

    if (user) {
        return children
    }
    return (
        <Navigate to='/login' replace={true}></Navigate>
    );
};

export default PrivateRoutes;