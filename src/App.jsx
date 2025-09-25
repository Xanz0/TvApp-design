import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './assets/Header';
import Main from './assets/Main';
import Footer from './assets/Footer';
import './App.css';
import Motion from './assets/Motionn';
import Admin from './Admin';
import Vidm from './assets/Vidm';
import NewsAll from './assets/NewsAll';
import NewsDetail from "./assets/NewsDetail";

import TvPrograms from "./assets/TvPrograms";
import TvProgramsAll from './assets/TvProgramsAll';
import TvProgramDetail from "./assets/TvProgramDetail";

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
            <Route path="/admin" element={<Admin />} />
            <Route path="/vidm" element={<Vidm />} />
            <Route path="/newsall" element={<NewsAll />} />
            <Route path="/tvprogramsall" element={<TvProgramsAll />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/tv/:id" element={<TvProgramDetail />} />



          </Routes>
          <Footer />
        </Router>
      </div>
      
  )
}

export default App
