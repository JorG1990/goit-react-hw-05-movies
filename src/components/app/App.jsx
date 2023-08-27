
import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Appbar from "../AppBar/AppBar";
import Container from "../Container/Container";

const Home = lazy (() => import("views/home/Home"));
const Movies = lazy (() => import("views/movies/Movies"));
const MovieDetails = lazy (() => import("views/movieDetails/MovieDetails"));
const Cast = lazy (() => import("../Cast/Cast"));
const Reviews = lazy (() => import("../Reviews/Reviews"));

const App = () => {
  return (
    <>
    <Container>
      <Appbar/>
      <Suspense fallback={ <div>Loading...</div>}>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/movies" element={ <Movies/>} />
          <Route exact path="/movies/:movieId" element={ <MovieDetails/>}>
            <Route path="cast" element={ <Cast/>} />
            <Route path="reviews" element={ <Reviews/>} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
    </>
  );
};

export default App;
