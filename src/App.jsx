import React from 'react';
import './App.css';
import Home from './Home.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <><BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="Home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>  
  );
}

export default App;
