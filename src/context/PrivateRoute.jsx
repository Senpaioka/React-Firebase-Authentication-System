import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import {AuthContext} from '../context/AuthContext';

function PrivateRoute({children}) {

    const {user, isLoading} = useContext(AuthContext);
    const url_location = useLocation();
    
    if (isLoading) return <div className="flex justify-center items-center mt-10"><span className="loading loading-spinner text-success"></span></div>

    if (user) return children;

    return <Navigate state={url_location?.pathname} to='/login'></Navigate>

}

export default PrivateRoute;