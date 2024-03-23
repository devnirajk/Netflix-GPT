import React from 'react'
import MovieCards from './MovieCards'
import { ShimmerSimpleGallery } from "react-shimmer-effects";;

const MovieLists = ({title, movies, clicked}) => {
  
   
  return (
    <div className='mx-10 mb-10 px-7'>
    <h1 className='text-xl text-white px-3 mb-5 font-medium'>{title}</h1>
    {
    (movies===null && clicked) ? <ShimmerSimpleGallery card imageHeight={100} col={3} row={3}/>:
    (<div className='flex overflow-x-scroll no-scrollbar px-3'>
    <div className='flex'>
      {
        movies?.map((movie) => <MovieCards key={movie.id} movie={movie}/>)
      }
    </div>
    </div>)
    }
    </div>
  )
}

export default MovieLists


//promise 10 10 promise[5] 