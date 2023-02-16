// import logo from './logo.svg'
import React from 'react';
import Header from './components/Header'
import Nav from './components/nav'
import Main from './components/main'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='top'>
        <Nav />
        <Header />
      </div>
        <Main />
    </div>
  );
}

export default App;
