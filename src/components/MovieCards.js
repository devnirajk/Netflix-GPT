import React from 'react'
import {img_cdn} from '../utils/constant'

const MovieCards = ({movie}) => {
  if(movie.poster_path === null) return;
  return (
    <div className='w-44 mx-2 text-white flex-col'>
        <img
        className='rounded-lg'
        src={img_cdn+movie.poster_path}
        alt='movie_poster'
        />  
        <h1 className='mt-1 font-medium'>{movie.original_title}</h1>
    </div>
  )
}

export default MovieCards