import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watched Movies</h1>
          </div>

          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map((movie) => {
                return (
                  <>
                    <MovieCard movie={movie} type="watched" />
                  </>
                );
              })}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "column",
              }}
            >
              <h2 className="no-movies">
                No Movies Please Select Movie From Add movie
              </h2>
              <br />
              <Link
                to="/addMovie"
                style={{ padding: "20px", fontSize: "18px" }}
                className="btn"
              >
                <span className="icons">
                  <MdAddCircleOutline />
                </span>
                <span className="none__design">Add Movies</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Watched;
