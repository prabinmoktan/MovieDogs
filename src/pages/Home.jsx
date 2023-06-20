import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import TrendingMoviesPage from '../components/TrendingMoviesPage'

import { getSearchMovies, getTrendingMoviesData } from '../services/axios.service'
import CarousalData from '../components/CarouselData'


const Home = () => {
  const [searchKey, setSearchKey] = useState([]);
  const [movies, setMovies] = useState([]);


  const getMovies = async () => {
    const response = await getTrendingMoviesData();
    // console.log(response.results);
    setMovies(response.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const search = (e) => {
    setSearchKey(e.target.value)
  }

    
  const searchMovies = async(event) => {
    // event.preventDefault();
    const returnedData = await getSearchMovies(searchKey);
    setMovies(returnedData);
    
    
  }
  return (
    <>
    <Navbar search={search} searchMovies={searchMovies}/>
    <CarousalData movies={movies}/>
    <TrendingMoviesPage movies={movies}/>
  
    </>
  )
}

export default Home