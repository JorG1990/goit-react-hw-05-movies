
import { Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import Appbar from "";

const Home = lazy (() => import(""));
const Movies = lazy (() => import(""));
const MovieDetails = lazy (() => import(""));
const Cast = lazy (() => import(""));
const Reviews = lazy (() => import(""));

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
