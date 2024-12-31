import { useState } from 'react'

import './App.css'
import { BrowserRouter , Navigate, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';




function App() {
  const user= localStorage.getItem("token")

  return (
   
    <BrowserRouter>

<Routes>
      
      <Route path='/' element={<Navigate to="/home" />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home/>} />
     {user &&  <Route path='/dashboard' element={<Dashboard/>} />}
      
    </Routes >
    </BrowserRouter>
    
     
   
  )
}

export default App
