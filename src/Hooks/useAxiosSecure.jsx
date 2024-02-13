import axios from "axios"; 
import { useEffect } from "react";
import useAuthData from "./useAuthData";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-one-gamma-38.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {logOut} = useAuthData();
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        }, error=>{

            console.log('interceptors error', error.response)

            if(error.response.status === 401 || error.response.status === 403){
                logOut()
                .then(()=>{
                    navigate('/login')
                })
                .catch(err =>{
                    console.log(err.message);
                })
            }
            
        })
    },[logOut, navigate])

    
    return axiosSecure;
};

export default useAxiosSecure;