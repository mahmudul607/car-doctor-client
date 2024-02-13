import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, reload, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import axios from "axios";






const auth = getAuth(app);
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
           const userEmail = currentUser?.email || user?.email;
           const loggedUser ={email: userEmail};
           
            setUser(currentUser);
            setLoader(false);
            if(loggedUser){
                axios.post('https://car-doctor-server-one-gamma-38.vercel.app/jwt', loggedUser, {withCredentials:true})
                .then(res =>{
                    console.log(res.data);
                })
            }
            else{
                axios.post('https://car-doctor-server-one-gamma-38.vercel.app/logout', loggedUser, {withCredentials:true})
                .then(res =>{
                    console.log(res.data);
                })
            }



         
          
        });
        return () =>{
            unSubscribe();
        }
    },[])


    // send Email
    const sendVerificationEmail = (user)=>{
        setLoader(true)
        return sendEmailVerification(user)
    }
// logout
    const logOut = () => {
        setLoader(true);
        signOut(auth)
        reload();
        return 
    }
    const authInfo = {

        createUser,
        loginUser,
        logOut,
        loader,
        user,
        sendVerificationEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {

    children: PropTypes.node,
}

export default AuthProvider;