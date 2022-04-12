import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';

const RequireAuth = ({children}) => {
    const  location = useLocation();
    const [user] = useAuthState(auth);
    if(!user){
        toast('Please Login')
        return (
            <Navigate to='/login' state={{from:location}} replace></Navigate>
        )
    }


    return (
        children
    );
};

export default RequireAuth;