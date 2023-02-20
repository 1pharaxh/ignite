import React, { useContext, useState } from "react";

const LoginContext = React.createContext(true);

export const useLoginContext = () => {
  const [loginContext, setLoginContext] = useContext(LoginContext);

  const toggleLoginContext = () => setLoginContext(!loginContext);

  return [loginContext, toggleLoginContext];
};

export const LoginContextProvider = ({ children }) => {
  const [loginContext, setLoginContext] = useState(false);

  return (
    <LoginContext.Provider value={[loginContext, setLoginContext]}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
