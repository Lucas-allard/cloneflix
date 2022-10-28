import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    addToWatchList,
    findUser,
    findWatchListMovies,
    findWatchListSeries,
    removeToWatchListMovies, removeToWatchListSeries,
    searchData
} from "../../request/userRequest";
import {movieSlice} from "./movieSlice";

export const fetchUser = createAsyncThunk(
    'user/findUser',
    async () => {
        const response = await findUser();
        return response;
    }
)

export const fetchWatchListMovies = createAsyncThunk(
    'user/findWatchListMovies',
    async (id) => {
        const response = await findWatchListMovies(id);
        return response;
    }
)

export const fetchWatchListSeries = createAsyncThunk(
    'user/findWatchListSeries',
    async (id) => {
        const response = await findWatchListSeries(id);
        return response;
    }
)

export const addNewToWatchList = createAsyncThunk(
    'user/addToWatchList',
    async (data) => {
        await addToWatchList(data)
    }
)

export const removeNewToWatchListMovies = createAsyncThunk(
    'user/removeToWatchListMovies',
    async (data) => {
        const response = await removeToWatchListMovies(data)
        return response
    }
)

export const removeNewToWatchListSeries = createAsyncThunk(
    'user/removeToWatchListSeries',
    async (data) => {
        const response = await removeToWatchListSeries(data)
        return response
    }
)

export const fetchData = createAsyncThunk(
    'user/findData',
    async (query) => {
        const response = await searchData(query)
        return response;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: "idle",
        userData: null,
        isAuthenticated: false,
        watchList: {
            movies: null,
            series: null,
        },
        search: {
            multiSearch: null,
        },
        error: null,
    },
    reducers: {
        isAuthenticated: (state) => {
            let user = window.localStorage.getItem("user");
            user = JSON.parse(user);
            state.userData = user;
            state.isAuthenticated = true;
            console.log(state.userData)
        },
        logoutUser: (state) => {
            state.userData = null;
            state.isAuthenticated = false;
            window.localStorage.clear()
        }
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            state.userData = action.payload
            console.log(state.userData)
            window.localStorage.setItem('user', JSON.stringify((action.payload)))
        },
        [fetchWatchListMovies.fulfilled]: (state, action) => {
            state.watchList.movies = action.payload
        },
        [fetchWatchListSeries.fulfilled]: (state, action) => {
            state.watchList.series = action.payload
        },
        [addNewToWatchList.fulfilled]: (action) => {

        },
        [addNewToWatchList.rejected]: (state, action) => {
            state.error = action.payload
        },

        [removeNewToWatchListMovies.fulfilled]: (state, action) => {
            state.watchList.movies = action.payload
        },
        [removeNewToWatchListMovies.rejected]: (state, action) => {
            state.error = action.payload
        },
        [removeNewToWatchListSeries.fulfilled]: (state, action) => {
            state.watchList.series = action.payload
        },
        [removeNewToWatchListSeries.rejected]: (state, action) => {
            state.error = action.payload
        },
        [fetchData.fulfilled]: (state, action) => {
            state.search.multiSearch = action.payload
        },
        [fetchData.rejected]: (state, action) => {
            state.search.multiSearch = action.payload
        },
    }
})
export const { isAuthenticated, logoutUser } = userSlice.actions

export default userSlice.reducer
