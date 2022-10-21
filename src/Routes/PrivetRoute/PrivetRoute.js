import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <Spinner style={{marginLeft:'50%'}} animation="border" variant="primary" />
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivetRoute;