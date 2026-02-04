import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"));

  // 🔹 Tera hi function (fixed)
  const storetokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  let isLoggedIn = !!token;

  // Logout functionality
  const LogoutUser = ()=> {
    setToken(" ");
    return localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider 
      value={{isLoggedIn, storetokenInLS, token ,LogoutUser  }}   // ❗ only change here
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
