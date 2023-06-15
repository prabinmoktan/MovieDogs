import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function MovieCard({movie}) {
  // const poster = 'https://image.tmdb.org/t/p/original'
    const navigate = useNavigate();

    const ViewDetailHandler = (id) => {
        event.preventDefault();
        console.log(id)
         navigate(`/movies/${id}`);
    }

  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={'https://image.tmdb.org/t/p/original'+ movie.poster_path}
        style={{height:"15rem"}}
      />
      <Card.Body >
        <h5 >{movie.title}</h5>
        <Card.Text>{}</Card.Text>
        <p style={{ fontSize: "10px" }} className="">Release date:{movie.release_date}</p>
        <Button variant="primary" onClick={(  )=> ViewDetailHandler( movie.id)}>View Detail</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
