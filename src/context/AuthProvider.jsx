import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase_init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Toaster } from 'react-hot-toast';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
        })
    },[])

    const Logout = () =>{
        signOut(auth)
    }
    const userInfo = {
        createUser,
        LoginUser,
        Logout,user,
        setUser
    }
    console.log(user)
    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default AuthProvider;