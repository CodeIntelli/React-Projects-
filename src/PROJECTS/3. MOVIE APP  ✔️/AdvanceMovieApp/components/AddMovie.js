import React from "react";
import ResultCard from "./ResultCard";

const AddMovie = () => {
  const [query, setQuery] = React.useState("");
  const [results, setResult] = React.useState([]);
  const movieSearch = (e) => {
    console.log(process.env.REACT_APP_KEY);
    e.preventDefault();
    setQuery(e.target.value);
    fetch(`
https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setResult(data.results);
        } else {
          setResult([]);
        }
      });
  };
  return (
    <>
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search For A Movie Here"
                value={query}
                onChange={movieSearch}
              />
            </div>

            {results.length > 0 && (
              <ul className="results">
                {results.map((movie) => {
                  return (
                    <li key={movie.id}>
                      <ResultCard movie={movie} />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AddMovie;
