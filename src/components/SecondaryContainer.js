import React from 'react'
import MovieLists from './MovieLists'

const SecondaryContainer = ({movieDetail}) => {
  return (
    <div className='relative top-[835px] bg-black'>
      <MovieLists title={"Now Playing Movies"} movies={movieDetail.nowPlayingMovies}/>
      <MovieLists title={"Popular Movies"} movies={movieDetail.popularMovies}/>
      <MovieLists title={"Top Rated Movies"} movies={movieDetail.topRatedMovies}/>
      <MovieLists title={"Upcoming Movies"} movies={movieDetail.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer
