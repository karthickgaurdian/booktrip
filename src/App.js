import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home';

import Contact from './Component/Contact';
import Skills from './Component/Skills';
import Signup from './Component/Signup';
import About from './Component/About/About';



const App= () => {
  return (
    <>
    <div>
     
      
      <Navbar/>
     

  <Routes>

    <Route path='/' element={<Home/> } />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/skills' element={<Skills/>} />
    <Route path='/signup' element={<Signup/>} />
    


  </Routes>
     
      
    </div>
    
   
    </>
  );
}

export default App;
