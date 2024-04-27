import { createContext, useEffect, useState} from "react";
import useSweetAlert from "../hooks/useSweetAlert";
import { useLocation, useNavigate } from "react-router-dom";
import useSWRMutation from 'swr/mutation'
import axios from "axios";



export const AuthContext = createContext(null)

const login = (url , { arg }) => axios.post(url,{
  email: arg.email,
  password :  arg.password,
}).then(res => res.data)

export function AuthProvider ({ children }) {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const {trigger,isMutating,data,error} = useSWRMutation('https://react-camp-api.roocket.ir/api/admin/login',login,{revalidateIfStale:false,revalidateOnMount:false})
    const Toast = useSweetAlert()
    const navigate = useNavigate();
    const location = useLocation();




    useEffect(()=>{
      if(data){
        Toast.fire({
          icon: "success",
          title: "You are Login successfully"
        });
        localStorage.setItem('token',data.token)
        localStorage.setItem('user',data.name)
        const origin = location.state?.from?.pathname || '/';
        navigate(origin);
        setToken(data.token)
        setUser(data.name )
      }
  },[data])
  
  useEffect(()=>{
      if(error){
         Toast.fire({
            icon: "error",
            title: error.response.data.message
          });
      }
  },[error])

  const handleLogin = async(values)=>{
      await trigger(values)
  }

  const handleLogout = async(values)=>{
    setToken('')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login');
}

  
    const value = {
      token,
      setToken,
      user,
      setUser,
      handleLogin,
      handleLogout,
      isMutating
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };