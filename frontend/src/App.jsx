import React from 'react';
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


function App() {
  return (
    <Router>
      <div className="pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:id" element={<Company />} />
          <Route path="/how-to-apply" element={<HowToApply />} />
          <Route path="/resouces" element={<Resources />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
