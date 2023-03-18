import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("pages/Home"));
const MoviesPage = lazy(() => import("pages/Movies"));
const MoviesDetailsPage = lazy(() => import("pages/MoviesDetails"));
const CastPage = lazy(() => import("pages/Cast"));
const ReviewsPage = lazy(() => import("pages/Reviews"));
const NotFound = lazy(()=> import( "components/NotFound/NotFound"));

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
      <Route path="*" element={<NotFound />} /> 
      </Routes>

  );
};