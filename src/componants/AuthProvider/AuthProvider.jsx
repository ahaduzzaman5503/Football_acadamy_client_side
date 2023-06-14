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

  const createUser = (email, password) => {
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
      setLoading(false);
      setUsers(curentUser);

      if(createUser){
        axios.post('http://localhost:5000/jwt', {email: curentUser.email})
        .then(data => {
          console.log(data.data.token);
          localStorage.setItem('access-token', data.data.token)
        })
      } else{
        localStorage.removeItem('access-token')
      }
    });
    return () => {
      return unsuscribe();
    };
  }, []);

  const authInfo = {
    users,
    createUser,
    signIn,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
