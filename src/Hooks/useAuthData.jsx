import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuthData = () => {
   const  authData = useContext(AuthContext);
   return authData;
};

export default useAuthData;