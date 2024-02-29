import React, { useEffect } from 'react'
import {options} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';


const usePopularMovies = () => {
    const dispatch = useDispatch(); 

    async function fetchMovies(){
    const moviesList = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const movieDetails = await moviesList.json();
    dispatch(addPopularMovies(movieDetails.results));
    }

    useEffect(()=>{
        fetchMovies();
    }, []);
}

export default usePopularMovies;