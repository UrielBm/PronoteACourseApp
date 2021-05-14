import React, { useState, useEffect } from "react";
import firebase from "../firebase";
const useAuhtentication = () => {
  const [User, setUser] = useState(null);
  useEffect(() => {
    const unscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unscribe;
  }, []);
  return User;
};

export default useAuhtentication;
