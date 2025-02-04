import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BookingPage from '../pages/BookingPage'

const MyRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/booking' element={<BookingPage />}></Route>
    </Routes>
  )
}

export default MyRoute