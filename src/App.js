import { useState, useEffect } from "react";
import './App.css';
import searchicon from './search.svg';
import MovieCard from "./MovieCard";



// 4d0bde06

const API_URL = "http://www.omdbapi.com?apikey=4d0bde06";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Spiderman');

  }, []);
  return (
    <div className="app">
      <h1>MoveLand</h1>

      <div className="search">
        <input type="text" placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)} />
        <img
          src={searchicon}
          alt="searchicon"
          onClick={() => searchMovies(searchTerm)}

        ></img>

      </div>

      {movies.length > 0
        ? (
          <div className="container">
            {/* <MovieCard movie1={movie1} /> */}
            {
              movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
    </div>
  );
}

export default App;
