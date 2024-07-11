import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import NoPage from '../NoPage'

const Auth = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  )
}

export default Auth