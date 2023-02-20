import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

function Home() {
  const [loginContext, setLoginContext] = useLoginContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoginContext(false);
    navigate('/login');
  };

  return (
    <div>
      {loginContext ? (
        <div>
          <h1>Welcome to the protected page!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You are not authorized to view this page. Please log in.</p>
      )}
    </div>
  );
}

export default Home;