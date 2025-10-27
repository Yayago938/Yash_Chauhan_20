import { useState } from 'react'

import './App.css'
import { Route,Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PostDetails from './pages/PostDetails'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Discoverpeople from './pages/Discoverpeople'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/post/:id" element={<PostDetails/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
           <Route path="/connect" element={<Discoverpeople/>}></Route>
      </Routes>
    </>
  )
}

export default App
