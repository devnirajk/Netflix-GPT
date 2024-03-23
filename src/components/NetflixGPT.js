// import React, { useRef, useState } from 'react'
// import chatGPT from '../utils/chatGPT';
// import {addMovieSuggestionList} from '../utils/netflixGPT';
// import { useDispatch, useSelector } from 'react-redux';
// import MovieLists from './MovieLists';
// import {options} from '../utils/constant';

// const NetflixGPT = () => {
//   const gptSearch = useRef("");
//   const dispatch = useDispatch();
//   const showRecommendedMovies = useSelector((store)=>store.netflixGPT.movieSuggestionList);
//   const [checkClick, setCheckClick] = useState(false);

//   async function fetchMovieByTitle(titleOfMovie){
//     const title = titleOfMovie.replace(/^\d+\.\s/, '');
//     const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
//       +title+"&include_adult=false&language=en-US&page=1", options);
//     const movieObject = await data.json();
//     return movieObject;
//   }

//   async function searchNetflixGPT () {
//       setCheckClick(true);
//       dispatch(addMovieSuggestionList(null));
//       const chatCompletion = await chatGPT.chat.completions.create({
//         messages: [{ role: 'user', 
//         content: "Hey ChatGPT, Could you please suggest me 7 movies English or Bollywood for my" + gptSearch.current.value + "mood. But Please only give movie names seperated by semicolon" 
//       }],
//         model: 'gpt-3.5-turbo',
//       });
//       const moviesSuggestions = chatCompletion.choices[0].message.content;
//       const arr = moviesSuggestions.split("\n");
//       const moviePromises = arr.map((titleOfMovie)=>fetchMovieByTitle(titleOfMovie));
//       const moviesSuggestionsList = await Promise.all(moviePromises);
//       const arraymoviesSuggestions = [];

//       moviesSuggestionsList?.map((movieDetail)=>{
//         movieDetail?.results.map((suggestedMovieObject)=>arraymoviesSuggestions.push(suggestedMovieObject))
//       });

//       dispatch(addMovieSuggestionList(arraymoviesSuggestions));
//   }

//   return (
//     <div className='w-screen h-screen bg-black pt-32 pl-6 h-auto'>
//     <div className='w-1/3 p-5 bg-teal-700 rounded-lg flex justify-between mb-5'>
//       <input 
//       ref={gptSearch}
//       placeholder="Tell us your mood!!"
//       className='bg-slate-300 rounded-lg outline-none text-black px-3 py-1 w-[75%] font-normal text-lg' />
//       <button 
//       onClick={searchNetflixGPT}
//       className='bg-red-700 rounded-lg text-white w-[20%] font-medium px-3 py-2 text-xl'>Search</button>
//     </div>
    
//     <div className='w-[99.9%] bg-black w-screen py-8 px-4'>
//     {
//         <MovieLists clicked={checkClick} title={"Recommended movies for your mood"} movies={showRecommendedMovies} />
//     }
//     </div>
//     </div>
//   )
// }

// export default NetflixGPT



import React, { useRef, useState } from 'react';
import chatGPT from '../utils/chatGPT';
import { addMovieSuggestionList } from '../utils/netflixGPT';
import { useDispatch, useSelector } from 'react-redux';
import MovieLists from './MovieLists';
import { options } from '../utils/constant';

const NetflixGPT = () => {
  const gptSearch = useRef("");
  const dispatch = useDispatch();
  const showRecommendedMovies = useSelector((store) => store.netflixGPT.movieSuggestionList);
  const [checkClick, setCheckClick] = useState(false);
  const [errorText, setErrorText] = useState(null);

  async function fetchMovieByTitle(titleOfMovie) {
    const title = titleOfMovie.replace(/^\d+\.\s/, '');
    try {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + title + "&include_adult=false&language=en-US&page=1", options);
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const movieObject = await data.json();
      return movieObject;
    } catch (error) {
      console.error("Error fetching movie:", error);
     
    }
  }
  console.log(errorText)
  async function searchNetflixGPT() {
    try {
      setCheckClick(true);
      dispatch(addMovieSuggestionList(null));
      const chatCompletion = await chatGPT.chat.completions.create({
        messages: [{ role: 'user', content: "Hey ChatGPT, Could you please suggest me 7 movies English or Bollywood for my" + gptSearch.current.value + "mood. But Please only give movie names separated by semicolon" }],
        model: 'gpt-3.5-turbo',
      });
      const moviesSuggestions = chatCompletion.choices[0].message.content;
      const arr = moviesSuggestions.split("\n");
      const moviePromises = arr.map((titleOfMovie) => fetchMovieByTitle(titleOfMovie));
      const moviesSuggestionsList = await Promise.all(moviePromises);
      const arraymoviesSuggestions = [];

      moviesSuggestionsList?.map((movieDetail) => {
        movieDetail?.results.map((suggestedMovieObject) => arraymoviesSuggestions.push(suggestedMovieObject))
      });

      dispatch(addMovieSuggestionList(arraymoviesSuggestions));
    } catch (error) {
      console.error("Error searching NetflixGPT:", error);
      setErrorText("Something went wrong (Request Rejected) 401");
    }
  }

  return (
    <div className='w-screen h-screen bg-black pt-32 pl-6 h-auto'>
      <div className='w-1/3 p-5 bg-teal-700 rounded-lg flex justify-between mb-5'>
        <input
          ref={gptSearch}
          placeholder="Tell us your mood!!"
          className='bg-slate-300 rounded-lg outline-none text-black px-3 py-1 w-[75%] font-normal text-lg' />
        <button
          onClick={searchNetflixGPT}
          className='bg-red-700 rounded-lg text-white w-[20%] font-medium px-3 py-2 text-xl'>Search</button>
      </div>
      {(errorText)?<h1 className='text-white font-semibold bg-red-700 w-auto p-2'>{errorText}</h1>:
      <div className='w-[99.9%] bg-black w-screen py-8 px-4'>
        {
          <MovieLists clicked={checkClick} title={"Recommended movies for your mood"} movies={showRecommendedMovies} />
        }
      </div>}
    </div>
  )
}

export default NetflixGPT;
