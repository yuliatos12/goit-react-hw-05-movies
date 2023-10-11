import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const KEY = "0c47dfbd6e6c78608dc1f0b39b4dd72d";

export async function getMovies(endPoint) {
    const url = `${URL}${endPoint}?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export async function getMovieDetails(endPoint, movieId) {
    const url = `${URL}${endPoint}/${movieId}?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export async function getMovieCast(endPoint, movieId) {
    const url = `${URL}${endPoint}/${movieId}/credits?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export async function getMovieReviews(endPoint, movieId) {
    const url = `${URL}${endPoint}/${movieId}/reviews?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export async function getSearchMovies(endPoint, query) {
    const url = `${URL}${endPoint}?api_key=${KEY}&query=${query}`
    const response = await axios.get(url);
    return response.data;
};
export function handleFetchError() {
   alert('Something went wrong! Try reloading the page!');
};