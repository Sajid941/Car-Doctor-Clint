import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    if(loading){
        return "loading"
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;