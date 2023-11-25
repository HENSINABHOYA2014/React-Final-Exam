import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './login';
import Register from './register';
import Notes from './Notes';


function App() {


  return (
    
<>
<BrowserRouter>
<Routes>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/notes' element={<Notes/>}/>
</Routes>
</BrowserRouter>




</>

      
  );
}

export default App;
