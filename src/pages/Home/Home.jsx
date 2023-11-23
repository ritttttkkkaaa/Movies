import {useEffect, useState} from 'react'
import { getTrendyMovies } from 'services/movieApi';
import TrendyMovieList from 'components/TrendyMovieList/TrendyMovieList';
import { Title } from './Home.module';


const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
    getTrendyMovies().then(setMovies)
    }, [])
     
    return ( <>
    <Title>Trending today</Title>
    <TrendyMovieList movies={movies} url={movies.poster_path}/>

    </> );
}
 
export default Home;