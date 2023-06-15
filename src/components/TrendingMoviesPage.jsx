import React, { useState, useEffect } from "react";
import { getTrendingMoviesData } from "../services/axios.service";
import { AiFillFire } from "react-icons/ai";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await getTrendingMoviesData();
    console.log(response.results);
    setMovies(response.results);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
    {/* <Navbar/> */}
    <h2 className="d-flex justify-content-center ">
          <AiFillFire />
          Trending Movies
          <AiFillFire />
        </h2>
      <div className="d-flex  justify-content-between flex-wrap gap-4 container">
        
        {movies &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </>
  );
};

export default MoviesPage;
