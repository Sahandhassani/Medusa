import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <Router>   
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <Body />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
    </Router>  
  );
}

export default App;