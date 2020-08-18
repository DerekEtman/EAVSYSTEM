import React from 'react';
import './App.scss';
import Header from './features/header/header';
import Splash from './features/splash/splash';
import Footer from './features/footer/footer';

function App() {
  return (
    <div>
    <Header />
    <Splash />
    <Footer/>
    </div>
  );
}

export default App;
