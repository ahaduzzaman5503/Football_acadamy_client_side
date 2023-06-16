import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import app from "../firebase/firebase.init";

export const AuthContext = createContext({});

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
      setUsers(curentUser);
      if (currentUser) {
        axios
          .post("https://football-acadamy-server.vercel.app/jwt", { email: curentUser?.email })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        // setLoading(false);
        // setUsers(curentUser);
      }
      setLoading(false);
    });
    return () => {
      return unsuscribe();
    };
  }, []);

  const authInfo = {
    currentUser,
    signIn,
    logOut,
    loading,
    users
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
