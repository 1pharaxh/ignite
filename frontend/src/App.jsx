import React, { useState, useEffect } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const override = {
    display: "block",
    margin: "0 auto",
    padding: "0",

    // borderColor: "teal",
  };
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width >= 700 ? (
    <AuthContextProvider>
      <Router>
        <div className="
          pt-20 
          relative 
          min-h-screen">
          <Navbar className="fixed" />
          <div className='flex flex-col min-h-screen'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/companies/:id" element={<Company />} />
              <Route path="/how-to-apply" element={<HowToApply />} />
              <Route path="/resouces" element={<Resources />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/login" element={<Redirection><LoginPage /></Redirection>} />
              <Route path="/account" element={<Protected><AccountPage /></Protected>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthContextProvider>
  ) : (
    <div className='mx-10'>
      <div className='flex flex-col justify-center items-center gap-8'>
        <div>
          <h1 className='font-bold text-8xl text-teal-600 antialiased hover:underline hover: decoration-sky-500'>
            Sorry!
          </h1>
        </div>

        <h1 className='font-semibold' >
          This <a class="underline decoration-sky-500">website</a> is <a class="underline decoration-red-500">not</a> supported on <a class="underline decoration-indigo-500">mobile devices</a> yet.
          We are working <a class="underline decoration-orange-500">hard</a>  to make it available for you soon.
        </h1>
        <h1 className='font-bold text-lg text-teal-600' >
          Please visit this website on a <a class="underline decoration-green-500">Desktop</a> or <a class="underline decoration-yellow-500">Laptop</a> to view the content.
        </h1>
        <div >
          <ClimbingBoxLoader cssOverride={override} size={30} color={"#0f766e"} loading={true} />
        </div>
        <h1 className='font-bold text-3xl text-teal-600' >
          Loading...
        </h1>
      </div>
    </div>
  );
}

export default App
