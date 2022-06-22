import React, { useContext } from "react";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);
  const removeMovieFromWatchlists = (id) => {
    removeMovieFromWatchlist(id);
    toast.error("😥 Movie Removed ", {
      position: "bottom-center",
      autoClose: 3000,
      transition: Zoom,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const addWishlist = (movie) => {
    moveToWatchlist(movie);
    toast.success("😍 Moved To Wishlist ", {
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
  const RemoveWatched = (id) => {
    removeFromWatched(id);
    toast.error("Finally! You Have Watched Movie🎥 ", {
      position: "bottom-center",
      autoClose: 3000,
      transition: Zoom,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const addWatched = (movie) => {
    addMovieToWatched(movie);
    toast.info("🤩 Movie Watched ", {
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
      <div className="inner-card-controls">
        {type === "watchlist" && (
          <>
            <button
              className="ctrl-btn"
              title="Add to Watched"
              onClick={() => {
                addWatched(movie);
              }}
            >
              <BsEyeSlash />
            </button>
            <button
              className="ctrl-btn"
              title="Remove from watchlist"
              onClick={() => removeMovieFromWatchlists(movie.id)}
            >
              <FaTimes />
            </button>
          </>
        )}

        {type === "watched" && (
          <>
            <button
              className="ctrl-btn"
              title="Move to Watchlist"
              onClick={() => {
                addWishlist(movie);
              }}
            >
              <BsEyeFill />
            </button>
            <button
              className="ctrl-btn"
              title="Remove from watchlist"
              onClick={() => RemoveWatched(movie.id)}
            >
              <FaTimes />
            </button>
          </>
        )}
      </div>
      <ToastContainer />
      <ToastContainer />
      <ToastContainer />
      <ToastContainer />
    </>
  );
};
