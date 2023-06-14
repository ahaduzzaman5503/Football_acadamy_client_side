import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (curentUser) => {


      if(currentUser){
        axios.post('http://localhost:5000/jwt', {email: curentUser?.email})
        .then(data => {
          console.log(data.data.token);
          localStorage.setItem('access-token', data.data.token)
          setLoading(false);
          setUsers(curentUser);
        })
      } else{
        localStorage.removeItem('access-token')
        setLoading(false);
        setUsers(curentUser);
      }
    });
    return () => {
      return unsuscribe();
    };
  }, []);

  const authInfo = {
    users,
    currentUser,
    signIn,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
