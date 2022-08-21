import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';

export const searchMovie = text => {
    return ({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = (text) => {
    axios.get(`http://www.omdbapi.com/?apikey=fbfcbe0e&s=${text}`)
    .then (response => 
        ({
            type: FETCH_MOVIES,
            payload: response.data
        })
        ) 
       .catch(err => console.log(err));
};

export const fetchMovie = (id) => {
   axios.get(`http://www.omdbapi.com/?apikey=fbfcbe0e&i=${id}`)
     .then(response => ({
         type: FETCH_MOVIE,
         payload: response.data
     })
     )
     .catch(err => console.log(err));
};

export const setLoading = () => {
    return{
        type: LOADING
    };
};
