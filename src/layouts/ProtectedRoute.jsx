import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

export default function ProtectedRoute  ({ children }) {
    const { token,setToken,setUser } = useAuth();
    const location = useLocation();
    const localToken=localStorage.getItem('token')
    const localUser=localStorage.getItem('user')

    useEffect(()=>{
        if(localToken){
          setToken(localToken)
        }
    },[localToken])
    useEffect(()=>{
        if(localUser){
          setUser(localUser)
        }
    },[localUser])

  
    if (!localToken) {
      setToken('')
      return <Navigate to="/login" replace state={{ from: location }} />;
    }
  
    return children;
  };
  