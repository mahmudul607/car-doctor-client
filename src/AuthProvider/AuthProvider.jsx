import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, reload, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";


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
            setUser(currentUser);
            setLoader(false);
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