import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";
import app from '../../firebase/firebase.config';
import toast from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const providerLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth , (currentUser)=>{
            console.log('user inside auth state change', currentUser)
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser)
            }
            setLoading(false)
        });

        return () =>{
            unsubscrib();
        }
    },[])

    const authInfo = {user, loading, setLoading, createUser, signIn, providerLogin, logOut, updateUserProfile, verifyEmail}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;