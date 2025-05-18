import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase_init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Toaster } from 'react-hot-toast';

const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        createUser,
        LoginUser
    }
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