import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Appbar from "components/AppBar/AppBar";
import Container from "components/Container/Container";

const Home = lazy(() => import("views/home/Home"));
const Movies = lazy(() => import("views/movies/Movies"));
const MovieDetails = lazy(() => import("views/movieDetails/MovieDetails"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));


const App = () => {
  return (
    <>
    <Container>
       <Appbar/>
       <Suspense fallback={<div>Loading...</div>}>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route exact path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Routes>
      </Suspense>
    </Container>
    </>
  );
};

export default App;
