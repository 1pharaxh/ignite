import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
import LoginContextProvider from './utils/LoginContextProvider';
import Protected from './pages/Protected';

function App() {

  return (
    <LoginContextProvider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Protected><Home /></Protected>} /> */}
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </LoginContextProvider>
  )
}

export default App
