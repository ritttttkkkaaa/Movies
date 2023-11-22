import { Link, useLocation } from "react-router-dom";
import {List,ListItem,Img} from './TrendyMovieList.module'



const TrendyMovieList = ({movies}) => {


  const location = useLocation();
  console.log(location)
return ( 
<List>
  {movies.map(({ id, original_title, poster_path}) => (
    <ListItem key={id}>
       <Link state={{ from: location }} to={`/movies/${id}`}>
          <Img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title}/>  
            <div>
              <h3>
                {original_title}
              </h3>
            </div>
       </Link>
    </ListItem>
  ))}
    
</List> );
}
 
export default TrendyMovieList;