import { Navigate, Outlet } from "react-router-dom";
import useOfStatus from "../hooks/useOfStatus";

const PrivateRoute = () => {
   const { loggedIn, checkingStatus } = useOfStatus();
   if(checkingStatus){
      return <h3>Loading...</h3>
   }
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in'/>
}

export default PrivateRoute;
