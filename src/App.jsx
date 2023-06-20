

import "./App.css";
import { Routes, Route } from "react-router-dom";
import TrendingMoviesPage from './components/TrendingMoviesPage'

import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/movies" element={<TrendingMoviesPage/>} />
        <Route path="/movies/:id" element={<MovieDetailPage/>} />

        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
