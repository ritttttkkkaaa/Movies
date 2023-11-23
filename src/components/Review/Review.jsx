import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "services/movieApi";
import {Text} from "./Reviews.module"

const Reviews = () => {
    // eslint-disable-next-line
  const [reviews, setReviews] = useState([])
  const {movieId} = useParams();



  useEffect(() => {
    const fetchReviews = async() => {
        try {
            const res = await getMovieReviews(movieId);
            console.log(res)
            setReviews(res)
        }
        catch (error){
            console.log(error)
        }
    }
    fetchReviews()
  },[movieId])
    
  

return reviews.length === 0 ? ( 
    <h3>No reviews</h3>
) : (
<ul>
  {reviews.map(({ id, author, content}) => {
    return(
        <li key={id}>
            <Text>Author: {author}</Text>
            <p>{content}</p>
        </li>
    )
  })}
</ul> 
);
}
 
export default Reviews;