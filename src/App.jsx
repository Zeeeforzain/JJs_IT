import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import ContactForm from './ContactForm.jsx';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

