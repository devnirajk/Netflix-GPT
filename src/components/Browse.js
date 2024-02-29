import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movieStore = useSelector((store) => store.movie);
  if(!movieStore.nowPlayingMovies) return;
  if(!movieStore.popularMovies) return;
  if(!movieStore.topRatedMovies) return;
  if(!movieStore.upcomingMovies) return;

  
  return (
    <div className='bg-black'>
      <Header />
      <MainContainer movieDetail={movieStore.nowPlayingMovies[0]} />
      <SecondaryContainer movieDetail={movieStore}/>
    </div>
  )
}

export default Browse
