import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { getMovieById } from '../services/axios.service'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';







const MovieDetailPage = () => {
    const [movie, setMovie] = useState([]);
    const { id } = useParams();


    const getSingleMovie= async(id) => {
        const response = await getMovieById(id);
        console.log(response);
        setMovie(response);    
    }
    useEffect(() => {
        getSingleMovie(id);

    },[]);

  return (
    <>
    <Navbar />
    <Container className='bg-black text-white'>
        <Row>
            <Col md='6'>
                
                <h1 className='d-flex justify-content-center'>{movie.title}</h1>
                <p style={{fontSize:'11px'}}></p>
                <p style={{fontSize:'11px'}}>Released-Date:{movie.release_date}</p>
                <p>{movie.tagline}</p>
                <p style={{fontSize:'11px'}}>{movie.overview}</p>

                
            
                   
            
            </Col>
            <Col md='6' className=' d-flex justify-content-center '>
                <img src={'https://image.tmdb.org/t/p/original'+movie.poster_path} className='w-50' alt={movie.title}/>
            </Col>
            
            
        </Row>
    </Container>
    </>
  )
}

export default MovieDetailPage