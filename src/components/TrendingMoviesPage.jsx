import React, { useState, useEffect, Fragment } from "react";
import { getTrendingMoviesData } from "../services/axios.service";
import { AiFillFire } from "react-icons/ai";
// import CarouselMovie from "./CarouselMovie";
import MovieCard from './MovieCard'
const MoviesPage = ({movies}) => {
  

  return (
    <>
    {/* {movies && 
    movies.map((movie) => {
      return <CarouselMovie />
    })} */}
      <h2 className="d-flex justify-content-center mt-5">
        <AiFillFire />
        Trending Movies
        <AiFillFire />
      </h2>
      <div className="d-flex  justify-content-evenly flex-wrap gap-4 position_absolute container">
        {movies &&
          movies.map((movie) => {
            return  <MovieCard key={movie.id} movie={movie} />
              
            
          })}
      </div>

    </>
  );
};

export default MoviesPage;
