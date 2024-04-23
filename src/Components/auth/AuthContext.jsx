import React, { createContext, useState } from 'react'; // Removed unnecessary useContext import
import { auth } from '../../firebase'; // Corrected the path for importing auth from firebase.js

const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Login function using Firebase Authentication
  const login = async (data) => {
    try {
      const response = await auth.signInWithEmailAndPassword(data.email, data.password);
      setIsLoggedIn(true);
      setUser(response.user);
    } catch (error) {
      console.error(error);
      // Handle login errors (e.g., display error message)
    }
  };

  // Signup function using Firebase Authentication
  const signup = async (data) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(data.email, data.password);
      setIsLoggedIn(true);
      setUser(response.user);
    } catch (error) {
      console.error(error);
      // Handle signup errors (e.g., display error message)
    }
  };

  // Logout function
  const logout = () => {
    auth.signOut().then(() => {
      setIsLoggedIn(false);
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
