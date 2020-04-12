import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Catalogue from './Catalogue';
import {Router} from 'react-router-dom';

function App() {
  return (
    <div className='main-container'>
		<Catalogue></Catalogue>
    </div>
    
  );
}


export default App;
