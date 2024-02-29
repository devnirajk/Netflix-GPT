import React, { useEffect } from 'react'
import {options} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';


const useNowPlayingMovies = () => {
    const dispatch = useDispatch(); 

    async function fetchMovies(){
    const moviesList = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const movieDetails = await moviesList.json();
    dispatch(addNowPlayingMovies(movieDetails.results));
    }

    useEffect(()=>{
        fetchMovies();
    }, []);
}

export default useNowPlayingMovies;