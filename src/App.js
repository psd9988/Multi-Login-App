import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainSignUp from "./components/SignUp.js";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/mainsignup" element={<MainSignUp />} />
    </Routes>
  );
}

export default App;