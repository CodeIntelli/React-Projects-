import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

const ResultCard = ({ movie }) => {
  const { AddMovieToWatchlist, watchlist, watched } = useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);
  let watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const AddToWatch = (movie) => {
    AddMovieToWatchlist(movie);
    toast.success("💝 Movie Added", {
      position: "top-right",
      autoClose: 3000,
      transition: Bounce,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              title={`${movie.title} [Release Date:- ${movie.release_date}]`}
            />
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>

        <div className="info">
          <div className="header">
            <h3 className="title">{movie.title}</h3>

            <h4 className="release-date">
              {movie.release_date ? movie.release_date.substring(0, 4) : ""}
            </h4>
          </div>
          <div className="controls">
            <button
              className="btn"
              disabled={watchlistDisabled}
              onClick={() => AddToWatch(movie)}
            >
              Add To Watchlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ResultCard;
