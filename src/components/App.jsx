import {  Route , Routes } from 'react-router-dom';
import { lazy  } from 'react';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movie/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Layout = lazy(() => import('../components/Layout/Layout'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Review/Review'));



const App = () => {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
 
export default App;