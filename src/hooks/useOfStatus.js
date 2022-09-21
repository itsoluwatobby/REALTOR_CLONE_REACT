import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useOfStatus = () => {
   const [loggedIn, setLoggedIn] = useState(false);
   const [checkingStatus, setCheckingStatus] = useState(true)
   const auth = getAuth();
   const navigate = useNavigate()

   const handleLogout = () => {
      auth.signOut()
      navigate('/')
   }
  
   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if(user){
            setLoggedIn(true)
         }
         setCheckingStatus(false)
      })
   }, [auth])
  return { loggedIn, checkingStatus, handleLogout }
}

export default useOfStatus;
