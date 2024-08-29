import React from 'react';
import './App.css';
import Home from './Home.jsx';
import Tools from './Components/Tools.js';
import ContactForm from './ContactForm.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <><BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Tools" element={<Tools/>}/>
      <Route path="ContactForm" element={<ContactForm/>}/>
    </Routes>
    </BrowserRouter>
    </>  
  );
}

export default App;
