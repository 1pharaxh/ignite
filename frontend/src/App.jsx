import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Companies from './pages/Companies';
import Company from './pages/Company';
import HowToApply from './pages/HowToApply';
import Resources from './pages/Resources';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import { AuthContextProvider } from './context/AuthContext';
import AccountPage from './pages/AccountPage';
import Protected from './pages/Protected';
import Redirection from './pages/Redirection'
import EditPage from './pages/EditPage';
import SignupPage from './pages/SignupPage';

function App() {

  const location = useLocation();
  const isLocation = location.pathname === '/login' || location.pathname === '/account' || location.pathname === '/edit' || location.pathname === '/signup';

  return (

    <AuthContextProvider>

      <div className="">
        <Navbar />
        <div className='flex flex-col'>
          <Routes>
            <Route path="/edit" element={<Protected><EditPage /></Protected>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:id" element={<Company />} />
            <Route path="/how-to-apply" element={<HowToApply />} />
            <Route path="/resouces" element={<Resources />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/account" element={<Protected><AccountPage /></Protected>} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {!isLocation && <Footer />}
      </div>
    </AuthContextProvider>
  )
}
export default App
