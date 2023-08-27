
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrendingMovies } from "servicesApi/ApiMovies";
import { ContenedorHome } from "./Home.styled";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendingMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <ContenedorHome>
      <h1>Trending Today</h1>
      <ul>
        { movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }} >
              { movie.title }
            </Link>
          </li>
        ))}
      </ul>
    </ContenedorHome>
  );
};

export default Home;
