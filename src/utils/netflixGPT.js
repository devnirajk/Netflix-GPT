import { createSlice } from "@reduxjs/toolkit";

const netflixGPT = createSlice({
    name:"netflixGPT",
    initialState:{ 
        useNetflixGPT: false,
        movieSuggestionList: null
    },
    reducers:{
        toogleNetflixGPT:(state)=>{
            state.useNetflixGPT = (!state.useNetflixGPT)
        },
        addMovieSuggestionList:(state, actions)=>{
            state.movieSuggestionList = actions.payload
        }
    }
});

export const {toogleNetflixGPT, addMovieSuggestionList} = netflixGPT.actions;
export default netflixGPT.reducer;