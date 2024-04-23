import { useContext, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext=React.createContext();

// 

export function AuthProvider({children}){
  const [currentUser,setCurrentUser]=useState(null);
  const[userLoggedIn,setUserLoggedIn]=useState(false);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,intializeUser);
    return unsubscribe;
  },[])

  async function initializeUser(user) {
    if (user) {
      setCurrentUser(user);
      setUserLoggedIn(true);
      setLoading(false);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ currentUser, userLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}