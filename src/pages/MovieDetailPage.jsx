import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getMovieById } from "../services/axios.service";
import { useNavigate, useParams } from "react-router-dom";

import "../App.css";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getSingleMovie = async (id) => {
    const response = await getMovieById(id);
    // console.log(response);
    setMovie(response);
  };
  useEffect(() => {
    getSingleMovie(id);
  }, []);
  const goToHandler = (e) => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <>
    
      <Container className="mt-5">
        <Row>
          <Col md="6">
            <h1 className="d-flex justify-content-center">{movie.title}</h1>
            <p>{movie.tagline}</p>
            <p >{movie.overview}</p>
            <p style={{ fontSize: "11px" }} className="mt-5">
              Released-Date:{movie.release_date}
            </p>
            <p style={{ fontSize: "11px" }}>IMDB:{movie.vote_average}</p>
          </Col>
          <Col md="6" className=" d-flex justify-content-center ">
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              className="w-50  pic-shadow rounded "
              alt={movie.title}
            />
          </Col>
        </Row>
        <div className="text-center mt-4">
        <Button onClick={goToHandler}>Go To Home</Button>
        </div>
      </Container>
      
    </>
  );
};

export default MovieDetailPage;
