import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCast } from "services/movieApi";
import {List,Img,CastTitle,Item,Text} from './Cast.module'


const Cast = () => {
 const [cast, setCast] = useState([]);
 const { movieId } = useParams();

 useEffect(() => {
   getMovieCast(movieId).then(cast => {
       setCast(cast)
   })
 }, [movieId])
 
console.log(getMovieCast())
 
 return ( 
  <>
   {
    <List>
     {cast.map(({ id, profile_path, original_name, character}) => {
        return (
            <Item key={id}>
          <Img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name}/>
          <CastTitle>
           <Text>
             <span> Actor:</span> {original_name}
           </Text>
           <Text>
             <span> Character:</span> {character}
           </Text>
          </CastTitle>
        </Item>
        )
     })} 
   </List>
   }
 </> 
 );
}



 
export default Cast;