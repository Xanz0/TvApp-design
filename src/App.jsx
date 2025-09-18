import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './assets/Header';
import Main from './assets/Main';
import Footer from './assets/Footer';
import './App.css';
import Motion from './assets/Motionn';

const App = () => {

  return (
      <div className='app'>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <div className='main-root-01'>
                <Main />
              </div>
            } 
            />
            <Route path="/motion" element={<Motion/>} />



          </Routes>
          <Footer />
        </Router>
      </div>
      
  )
}

export default App
