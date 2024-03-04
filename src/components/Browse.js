import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

import { useSelector } from 'react-redux';
import NetflixGPT from './NetflixGPT';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movieStore = useSelector((store) => store.movie);
  const gpt = useSelector((store) => store.netflixGPT);

  if(!movieStore.nowPlayingMovies) return;
  if(!movieStore.popularMovies) return;
  if(!movieStore.topRatedMovies) return;
  if(!movieStore.upcomingMovies) return;

  
  return (
    <div className='bg-black'>
      <Header />
      {
      (gpt.useNetflixGPT)?
      (<NetflixGPT />):
      (<>
      <MainContainer movieDetail={movieStore.nowPlayingMovies[0]} />
      <SecondaryContainer movieDetail={movieStore}/>
      </>)
      }
    </div>
  )
}

export default Browse
