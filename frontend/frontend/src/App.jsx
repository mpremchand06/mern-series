import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Navbar from './components/Navbar'

import AdminLayouts from './components/layouts/AdminLayouts'
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'
import AdminServices from './pages/AdminServices'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayouts />}>

          <Route path="users" element={<AdminUsers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="services" element={<AdminServices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
