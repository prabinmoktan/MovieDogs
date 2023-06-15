import { useState } from 'react'
import Navbar from './components/Navbar'
import MoviesPage from './components/TrendingMoviesPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import MovieDetailPage from './pages/MovieDetailPage'
import Home from './pages/Home'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/' element={<Navbar/>}/> */}
      <Route path='/movies' element={<MoviesPage/>}/>
      
      <Route path='/movies/:id' element={<MovieDetailPage/>}/>
    </Routes>
  )
}

export default App
