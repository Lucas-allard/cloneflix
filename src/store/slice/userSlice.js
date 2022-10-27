import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    addToWatchList,
    findUser,
    findWatchListMovies,
    findWatchListSeries,
    removeToWatchList,
    searchData
} from "../../request/userRequest";

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
    async (type, id, post) => {
        const response = await addToWatchList(type, id, post)
        console.log(response)
        return response;
    }
)

export const removeNewToWatchList = createAsyncThunk(
    'user/removeToWatchList',
    async (type, id, post) => {
        const response = await removeToWatchList(type, id, post)
        console.log(response)
        return "ok";
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
        watchList: {
            movies: null,
            series: null,
        },
        search: {
            multiSearch: null,
        },
        error: null,
    },
    reducer: {},
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            state.userData = action.payload
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
        [removeNewToWatchList.pending]: (state, action) => {
            console.log(action)
        },
        [removeNewToWatchList.fulfilled]: (state, action) => {
            console.log(action)
        },
        [removeNewToWatchList.rejected]: (state, action) => {
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

export default userSlice.reducer
