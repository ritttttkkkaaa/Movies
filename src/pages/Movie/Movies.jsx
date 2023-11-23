import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TrendyMovieList from "components/TrendyMovieList/TrendyMovieList";
import { getMovieByName } from "services/movieApi";
import {Input,Button} from "./Movie.module"


const Movies = () => {
 const [movies, setMovies] = useState([]);
 const [query, setQuery] = useState('')
 const [searchParams, setSearchParams] = useSearchParams();
 
  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
        try {
            const movieByQuery = await getMovieByName(currentQuery)
            setMovies(movieByQuery)
        }
        catch (error) {
            console.log(error)
        }
    }  
    fetchMovieByQuery()
},[searchParams])


 const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({query});
}

const handleSearchParams = ({target: {value}}) => {
    setQuery(value)
}

 return ( 
 <form onSubmit={handleSubmit}>
 <Input 
 type="text"
 value={query}
 onChange={handleSearchParams}
 />
 <Button type="submit">Search</Button>
 {movies.length > 0 && <TrendyMovieList movies={movies} />}
 </form> 
 );
}
 
export default Movies;