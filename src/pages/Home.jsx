import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios";

const Home = () => {

  const [movies, setMovies] = useState([])
  const [moviesList, setMoviesList] = useState([]);
  const [moviesList2, setMoviesList2] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  

  useEffect (() => {
      axios.get("https://www.omdbapi.com/?s=movies&apikey=19e3d499")
      .then(res => setMoviesList(res.data.Search))  
      console.log(moviesList);
  }, []);
  
  useEffect (() => {
      axios.get("https://www.omdbapi.com/?s=movies&apikey=19e3d499&page=2")
      .then(res => setMoviesList2(res.data.Search))  
      console.log(moviesList2);
  }, []);
    
    
  useEffect(() => {
    function searchMeal() {
        if (searchInput === "") {
            return moviesList;
      } else {
        const searchList = moviesList.filter((movie) => {
            return movie.Title.toLowerCase().includes(searchInput.toLowerCase());
            
        });

        setMoviesList(searchList);
      }
    }

    searchMeal();
  }, [searchInput]);
  
  useEffect(() => {
    function searchMeal() {
        if (searchInput === "") {
            return moviesList2;
      } else {
        const searchList = moviesList2.filter((movie) => {
            return movie.Title.toLowerCase().includes(searchInput.toLowerCase());

        });

        setMoviesList2(searchList);
      }
    }

    searchMeal();
  }, [searchInput]);


  return (
    <div className='home'>
          <Navbar />
          <div className="hero">
              <div className="container hero-content">
                  <h1>
                  Watch 
                  Something<br/>
                  Incredible
                  </h1>
              </div>
          </div>
          <div className="search">
              <div className="container search-sec">
                  <label>Search</label>
                  <input    
                      type="text"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                  />
              </div>
          </div>
          <div className="movie-cat">
              <div className="container">
                  <p>Movies</p>
                  <div className="movie-scroll">
                      {
                          moviesList ? moviesList.map((movie) => 
                              <div className="movie-card">
                                  <p>{movie.Title}</p>
                                  <img src={movie.Poster} alt="posterUrl" />
                              </div>
                          ): <div className="movie-card"><p>Nothing Found</p></div>
                      }
                  </div>
              </div>
          </div>
          <div className="movie-cat">
              <div className="container">
                  <p>Series</p>
                  <div className="movie-scroll">
                      {
                          moviesList2 ? moviesList2.map((movie) => 
                              <div className="movie-card">
                                  <p>{movie.Title}</p>
                                  <img src={movie.Poster} alt="posterUrl" />
                              </div>
                          ): <div className="movie-card"><p>Nothing Found</p></div>
                      }
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Home