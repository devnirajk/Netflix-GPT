import React, { useEffect } from 'react';
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch(); 
    
    async function fetchMovies(){
        try {
            const moviesList = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
            if (!moviesList.ok) {
                throw new Error('Failed to fetch movies');
            }
            const movieDetails = await moviesList.json();
            dispatch(addNowPlayingMovies(movieDetails.results));
        } catch (error) {
            console.error('Error fetching movies:', error);
            return "Something went wrong";
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);
}

export default useNowPlayingMovies;
