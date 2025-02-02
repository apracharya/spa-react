import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const MyRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
    </Routes>
  )
}

export default MyRoute