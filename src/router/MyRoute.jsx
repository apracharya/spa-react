import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BookingPage from '../pages/BookingPage'
import SigninPage from '../pages/SigninPage'
import AdminDashboard from '../pages/AdminDashboard'
import NotFoundPage from '../pages/NotFoundPage'

const MyRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
        <Route path='/booking' element={<BookingPage />}></Route>
        <Route path='/admin'>
          <Route path='login' element={<SigninPage />}></Route>
          <Route path='dashboard' element={<AdminDashboard />}></Route>
        </Route>
    </Routes>
  )
}

export default MyRoute