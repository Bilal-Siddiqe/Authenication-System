import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";


const useAuth = ()=>{
    return useContext(AuthContext);
}

export default useAuth;