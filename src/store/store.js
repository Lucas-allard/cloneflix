import {configureStore} from '@reduxjs/toolkit'
import movieReducer from "./slice/movieSlice";
import userReducer from "./slice/userSlice"

export default configureStore({
    reducer: {
        movies: movieReducer,
        user: userReducer,
    }
})