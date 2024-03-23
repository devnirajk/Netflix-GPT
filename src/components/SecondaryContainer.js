import React from 'react'
import MovieLists from './MovieLists'

const SecondaryContainer = ({movieDetail}) => {

  return (
    <div className='relative top-[850px] bg-black'>
      <MovieLists key={"1"} title={"Now Playing Movies"} movies={movieDetail.nowPlayingMovies}/>
      <MovieLists key={"2"} title={"Popular Movies"} movies={movieDetail.popularMovies}/>
      <MovieLists key={"3"} title={"Top Rated Movies"} movies={movieDetail.topRatedMovies}/>
      <MovieLists key={"4"} title={"Upcoming Movies"} movies={movieDetail.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer
