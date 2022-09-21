import { Navigate, Outlet } from "react-router-dom";
import useOfStatus from "../hooks/useOfStatus";
import Spinner from "./Spinner";

const PrivateRoute = () => {
   const { loggedIn, checkingStatus } = useOfStatus();
   if(checkingStatus){
      return <Spinner />
   }
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in'/>
}

export default PrivateRoute;
