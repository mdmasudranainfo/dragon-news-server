import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  //
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  //
  //
  // const user = { displayName: "Badam" };

  //   sing in with google
  const googleSing = (provider) => {
    signInWithPopup(auth, provider);
    //
    //
  };

  //
  const regiser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    //
    //
  };
  //
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  //
  const userInfo = { logOut, loading, user, googleSing, regiser, logIn };
  return (
    <AuthContext.Provider value={userInfo}>
      {/*  */}
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
