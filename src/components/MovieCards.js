import React from 'react'
import {img_cdn} from '../utils/constant'

const MovieCards = ({movie}) => {
  return (
    <div className='w-48 mx-2'>
        <img
        className='rounded-lg'
        src={img_cdn+movie.poster_path}
        alt='movie_poster'
        />
    </div>
  )
}

export default MovieCards