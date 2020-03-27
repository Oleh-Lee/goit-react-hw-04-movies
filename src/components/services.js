import axios from "axios";


const API_KEY = "c919f8b8c63efb348cc4277d55a583df";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export default {
  async getMovies() {
    const data = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    return data;
  },

  async getMoviesDetails(movieId) {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ukr-UKR`
    );
    return data;
  },

  async getMoviesSearch(query) {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ukr-UKR&query=${query}&page=1&include_adult=false`
    );
    return data;
  },

  async getMoviesCast(movieId) {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return data;
  },

  async getMoviesReviews(movieId) {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return data;
  },

}