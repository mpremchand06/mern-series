import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user , setUser] = useState("")

  // 🔹 Tera hi function (fixed)
  const storetokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);

  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn)

  // Logout functionality
  const LogoutUser = () => {
    setToken(null);
    return localStorage.removeItem("token")
  }

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      if(response.ok)
      {
        const data = await response.json()
        console.log("user data" , data);
        setUser(data);
      }
    }
    catch (error) {
      console.error("Error to fetching user data")
    }
  }
  useEffect(() => {
    userAuthentication()
  }, [])
  
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storetokenInLS, token, LogoutUser , user }}   // ❗ only change here
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
