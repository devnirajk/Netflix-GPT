import React, { useEffect } from 'react'
import {options} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';


const useUpcomingMovies = () => {
    const dispatch = useDispatch(); 

    async function fetchMovies(){
    const moviesList = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const movieDetails = await moviesList.json();
    dispatch(addUpcomingMovies(movieDetails.results));
    }

    useEffect(()=>{
        fetchMovies();
    }, []);
}

export default useUpcomingMovies;