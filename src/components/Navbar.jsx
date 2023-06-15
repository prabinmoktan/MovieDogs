import React from "react";
import { BsFilm, BsSearch } from "react-icons/bs";
import { FaDog } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="d-flex justify-content-between border text-black">
          <div className="d-flex ms-4">
            <Link className="d-flex " href='/'>
              <h2 className="mt-2">
                <BsFilm />
              </h2>
              <h1>
                <FaDog />
              </h1>

              <h1 className="nav-item">MovieDogs</h1>
            </Link>
          </div>
          <div className="border d-flex justify-content-center border rounded-pill h-25">
            <input type="text" className="border rounded-pill" />
            <Button variant="light" className=" rounded-pill bg-light">
              <BsSearch />
            </Button>
          </div>
          <div className="d-flex justify-content-between gap-5">
            <Link className="text-decoration-none">Recommended Movies</Link>
            <Link className="text-decoration-none">Latest Movies</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
