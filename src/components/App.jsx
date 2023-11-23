import {  Route , Routes } from 'react-router-dom';
import { lazy  } from 'react';
import Layout from './Layout/Layout';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movie/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
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