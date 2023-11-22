import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2'

export const getTrendyMovies = async() => {

    const {data} = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

    return data.results
}

export const getMovieByName = async query => {

    const {data} = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`)

    return data.results;
}



export const getMovieById = async movieId => {
    
    const {data} = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);

    return data;
}

export const getMovieCast = async movieId => {

    const {data} = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)

    return data.cast;
}

export const getMovieReviews = async (movieId) => {

    const {data} = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`) 

    return data.results;

}