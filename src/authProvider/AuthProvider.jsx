import React, { useEffect, useRef, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [getEmail, setGetEmail] = useState("");

  //get which user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // sign up using email & pass.
  const signUpWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign out
  const userSignOut = () => {
    return signOut(auth);
  };

  //Sign In using Email, Password
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // password reset email
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const value = {
    signUpWithEmailPassword,
    user,
    setUser,
    loading,
    setLoading,
    userLogIn,
    userSignOut,
    googleSignIn,
    passwordReset,
    setGetEmail,
    getEmail,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
