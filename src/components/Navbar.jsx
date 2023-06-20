import React, { useEffect, useState } from "react";
import { BsFilm, BsSearch } from "react-icons/bs";
import { FaDog } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import '../App.css'
import { Link, useNavigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";






const Navbar = ({search,searchMovies}) => {
  const [searchKey, setSearchKey] = useState([]);
  const navigate = useNavigate();
  
    

      useEffect(() => {
        searchMovies(searchKey);
      },[]);
      
  

  
  return (
    <>
      <nav >
        <div className="d-flex justify-content-between position-absolute p-1 container-fluid bg-opacity-50 bg-black">
          <div className="d-flex ms-4">
            <Link className="d-flex " to='/' >
              <h2 className="mt-2">
                <BsFilm />
              </h2>
              <h1>
                <FaDog />
              </h1>

              <h1 className="nav-item">MovieDogs</h1>
            </Link>
          </div>
          <form
            className="rounded border d-flex justify-content-center  mt-1 bg-white"
            style={{height:"2em"}}
          >
            <input
              type="text"
              className="border-0  form-control"
              onChange={search}
              
            />
            <Button
              variant="light"
              className="  bg-primary  border-0"
              onClick={searchMovies}
              
            >
              
              <BsSearch className="mb-1 text-light"/>
            </Button>
          </form>
          <div className="d-flex justify-content-between gap-5 mt-3 me-5 ">
            <Link className="text-decoration-none text-white position-relative  link" href="">Trending Movies</Link>
            <Link className="text-decoration-none text-white link" to='About'>About us</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
