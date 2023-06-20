import axios from 'axios'
import { useParams } from 'react-router-dom';
// const { searchKey } = useParams();


const apiKey = import.meta.env.VITE_API_KEY

export const getTrendingMoviesData = async() => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US&sort_by=release_date&sort_order=desc&api_key=849dfcc27ada13999ddfa97e6d174b64');

    // console.log(response.data);
    return(response.data);
}

export const getMovieById = async(id) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    // console.log(response.data);
    return (response.data);    

}
export const getSearchMovies = async(searchKey) => {
    let query = encodeURIComponent(searchKey);
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`);
    // query: searchKey
    console.log(response.data.results);
    return (response.data.results);
}
