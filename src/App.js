import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Catalogue from './Catalogue';
import {Router} from 'react-router-dom';

function App() {
  // const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);


  return (
    <div>
        
		<Catalogue></Catalogue>
    </div>
    
  );
}


export default App;
