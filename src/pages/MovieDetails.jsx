import { useParams, Link, Outlet,useLocation } from "react-router-dom";
import { getMovieById } from "services/movieApi";
import { useEffect, useState, Suspense } from "react";
import { Overlay, Info,AddInfo,Links,GoBack} from './MovieDetails.module'

const MovieDetails = () => {
    const [movie, setMovie] = useState('');
    const {movieId} = useParams();
    const location = useLocation();

    const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async() => {
        try{
            const res = await getMovieById(movieId);
            console.log(res)
            setMovie(res)
        }
        catch(e) {
            console.log(e)
        }
    }
    fetchMovieById()
  }, [movieId]);
  

 return (  
 <>
  <GoBack>
        <Link to={backLinkHref}>
          Go back
        </Link>
    </GoBack>
 <Overlay>
 <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}alt='movie'/>
  <Info>
    <h2>{movie.original_title}</h2>
    <p><span>User Score:</span>{movie.vote_average}</p>
    <p><span>Overview:</span>{movie.overview}</p>
  </Info>
    
</Overlay>
    <AddInfo>Additional information</AddInfo>
    <ul>
        <Links>
            <Link to={"cast"} state={{ from: location?.state?.from }}>Cast</Link>
        </Links>
        <Links>
            <Link to={"reviews"} state={{ from: location?.state?.from }}>Reviews</Link>
        </Links>
    </ul>
    <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
    </Suspense>
 </>
);
}
 
export default MovieDetails;