import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Homepage from './components/Homepage/Homepage'
import FastCheap from './components/FastCheap/FastCheap'
import GoodCheap from './components/GoodCheap/GoodCheap'
import GoodFast from './components/GoodFast/GoodFast'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/fast-cheap' element={<FastCheap/>}/>
          <Route exact path='/good-cheap' element={<GoodCheap/>}/>
          <Route exact path='/good-fast' element={<GoodFast/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
