import {  Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "pages/Home";
import MoviesPage from "pages/Movies";
import MoviesDetailsPage from "pages/MoviesDetails";
import CastPage from "pages/Cast";
import ReviewsPage from "pages/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Route>
      {/* <Route path="*" element={<div>Page not found</div>} />  */}
    </Routes>
  );
};