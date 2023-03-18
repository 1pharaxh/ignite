import React, { createContext, useState } from "react";

export const LoginContext = createContext(false);

const LoginContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;