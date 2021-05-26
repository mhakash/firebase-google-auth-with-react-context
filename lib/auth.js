import React, { useContext, useEffect, useState } from "react";
import firebase from "./firebase";

export const AuthContext = React.createContext({
  user: null,
  setUser: null,
});

const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    setUser,
  };
};

export const AuthProvider = ({ children }) => {
  const authContext = useAuthProvider();
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
