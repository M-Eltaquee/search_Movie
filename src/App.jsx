import "./App.css";
import { useEffect, useState } from "react";
import searchIcon from "./assets/searchIcon.svg";
import Movie from "./Movie.jsx";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [movies, setMovies] = useState([]);
  const apikey = "k_9921adbf";

  // const searchMovie2 = async (item) => {
  //   const res = await fetch(`http://www.omdbapi.com?apikey=9921adbf&s=${item}`);
  //   const data = await res.json();
  //   setMovies(data.Search);
  // };
  const searchMovie = (item) => {
    fetch(`http://www.omdbapi.com?apikey=9921adbf&s=${item}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  };
  useEffect(() => {
    searchMovie("Batman");
  }, []);

  return (
    <div className="app">
      <h1>Search Your Favourite Movie</h1>
      <div className="search">
        <input
          type="text"
          input={searchItem}
          onChange={(e) => setSearchItem((prev) => (prev = e.target.value))}
        />
        <img
          src={searchIcon}
          alt="search Icon"
          onClick={(e) => searchMovie(searchItem)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((item) => (
            <Movie movie={item} />
          ))}
        </div>
      ) : (
        <div className="empty">No Movie found</div>
      )}
    </div>
  );
}

export default App;
