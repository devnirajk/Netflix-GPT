import React, { useEffect } from 'react'
import {options} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';


const useTopRatedMovies = () => {
    const dispatch = useDispatch(); 

    async function fetchMovies(){
    const moviesList = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const movieDetails = await moviesList.json();
    dispatch(addTopRatedMovies(movieDetails.results));
    }

    useEffect(()=>{
        fetchMovies();
    }, []);
}

export default useTopRatedMovies;