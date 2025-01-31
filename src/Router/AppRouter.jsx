import React from 'react'
import Main from '../Components/Main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Content_1 from '../Components/Content/Content_1'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} >
        <Route path='/' element={<Home/>}></Route>
        <Route path='About' element={<Content_1/>}></Route>
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
