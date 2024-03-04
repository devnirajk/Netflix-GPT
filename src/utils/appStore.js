import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import netflixGPT from './netflixGPT';

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movie: movieReducer,
        netflixGPT: netflixGPT
    }
});

export default appStore;