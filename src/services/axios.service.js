import axios from 'axios'


    // export const API_KEY = process.env.REACT_APP_API_KEY
    // const BASEURL = '';

export const getTrendingMoviesData = async() => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US&sort_by=release_date&sort_order=desc&api_key=849dfcc27ada13999ddfa97e6d174b64');

    console.log(response.data);
    return(response.data);
}

export const getMovieById = async(id) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=849dfcc27ada13999ddfa97e6d174b64`);
    console.log(response.data);
    return (response.data);    

}

