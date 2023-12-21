import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })
        return ()=> unSubscribe();
    },[]);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    };

    const userProfileUpdate = (name,photoURL)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photoURL
        })
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        userProfileUpdate,
        logOut

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;