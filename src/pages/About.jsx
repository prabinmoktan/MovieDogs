import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  const goToHandler = (e) => {
    e.preventDefault();
    navigate('/')
  }
  return (
    <>
    <Container className='mt-5'>
      <h1 className='text-center'> About MovieDogs</h1>
      <Col className='col-6'>
    <Row className='mt-5'>
      <p>This moviedogs project was solely developed for self-learning. API was taken from the THEMOVIEDB.org. </p>
      <p>Thanks to VRIT TECHNOLOGY  for providing us the platform to learn.</p>
      <p>Special thanks to Teacher NIRANJAN KUNWOR for teaching  and leading me to the journey as FRONT END DEVELOPER.  </p>
    </Row>
    </Col>
    <Col className='col-6'>
    <Row>
      
    </Row>
    </Col>
    </Container>
    <div className='text-center mt-5 '>
    <Button onClick={goToHandler} className='mt-5 '>Go To Home</Button>
    </div> 
    </>
  )
}

export default About