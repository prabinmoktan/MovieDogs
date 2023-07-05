import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import TrendingMoviesPage from '../components/TrendingMoviesPage'

import { getSearchMovies, getTrendingMoviesData } from '../services/axios.service'
import CarousalData from '../components/CarouselData'
import Loader from '../components/Loader';


const Home = () => {
  const [searchKey, setSearchKey] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);




  const getMovies = async () => {
    const response = await getTrendingMoviesData();
    // console.log(response.results);
    setMovies(response.results);
    setLoading(true);
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
    <CarousalData key={movies.id} movies={movies}/>
    
    { loading ? (<TrendingMoviesPage  movies={movies}/>) : (<Loader/>)    }
    
  
    </>
  )
}

export default Home