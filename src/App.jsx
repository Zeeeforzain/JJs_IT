import React from 'react';
import './App.css';
import Home from './Home.jsx';
import Tools from './Components/Tools.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <><BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Tools" element={<Tools/>}/>
    </Routes>
    </BrowserRouter>
    </>  
  );
}

export default App;
