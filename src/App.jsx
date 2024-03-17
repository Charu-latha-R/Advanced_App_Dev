import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Weblayout from './layouts/Weblayout'
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Contact from './pages/Contact'
import './assets/css/core.css'

const App=()=> {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Weblayout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/contact' element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
