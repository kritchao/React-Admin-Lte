import React from 'react';
import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';




function App() {
  return (
    <div className='wrapper' style={{backgroundColor:"#F4F6F9"}}>
      <Header />
      <Contents />
    </div>
  );
}

export default App;
