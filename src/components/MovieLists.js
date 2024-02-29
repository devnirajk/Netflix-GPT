import React from 'react'
import MovieCards from './MovieCards'

const MovieLists = ({title, movies}) => {
  
  return (
    <div className='mx-10 mb-6'>
    <h1 className='text-2xl text-white px-3 mb-3'>{title}</h1>
    
    <div className='flex overflow-x-scroll no-scrollbar px-3'>
    <div className='flex'>
      {
        movies.map((movie) => <MovieCards movie={movie}/>)
      }
    </div>
    </div>
    </div>
  )
}

export default MovieLists
