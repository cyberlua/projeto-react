import Router from './Router'
import './global.css'
import DarkMode from './componentes/DarkMode';
import React, { useState, useEffect } from 'react';

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false); 

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => { 
    setIsDarkMode(!isDarkMode); 
  };

  return (
    <>
      <div className='App'>
        <Router />
        <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    </>
  )
}

export default App
