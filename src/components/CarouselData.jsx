import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

function CarousalData({movies}) {
  return (
    <Carousel className=' position_absolute index '>
      {movies.map((movie)=>{
        return <Carousel.Item key={movie.id}>
        <img
          className="d-block w-100 carou-box "
          src={'https://image.tmdb.org/t/p/original'+ movie.backdrop_path}
          alt={movie.title}
        />
        <Carousel.Caption className='bg-black bg-opacity-50 rounded'>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      })}
       
    </Carousel>
  );
}

export default CarousalData;