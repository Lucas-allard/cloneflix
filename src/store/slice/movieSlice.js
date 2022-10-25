import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {
    findLastPopularMovies,
    findMovies,
    findMoviesGenres,
    findMoviesWithGenre,
    findPopularSeries,
    findSeries,
    findSeriesGenres,
    findSeriesWithGenres,
    findTopRatedMovies,
    findTopRatedSeries
} from "../../request/moviesRequest";

export const fetchMoviesGenres = createAsyncThunk(
    'genres/findMoviesGenres',
    async () => {
        const response = await findMoviesGenres();
        return response;
    }
)

export const fetchSeriesGenres = createAsyncThunk(
    'genres/findSeriesGenres',
    async () => {
        const response = await findSeriesGenres();
        return response;
    }
)

export const fetchMovies = createAsyncThunk(
    'movies/findMovies',
    async () => {
        const response = await findMovies();
        return response;
    }
)

export const fetchLastPopularMovies = createAsyncThunk(
    'movies/findLastPopularMovies',
    async () => {
        const response = await findLastPopularMovies()
        return response
    }
)

export const fetchTopRatedMovies = createAsyncThunk(
    'movies/findTopRatedMovies',
    async () => {
        const response = await findTopRatedMovies();
        return response
    }
)

export const fetchMoviesWithGenres = createAsyncThunk(
    "movies/findMoviesWithGenres",
    async (genres) => {
        const response = await findMoviesWithGenre(genres);
        return response
    }
)

export const fetchSeries = createAsyncThunk(
    'series/findSeries',
    async () => {
        const response = await findSeries();
        return response;
    }
)

export const fetchPopularSeries = createAsyncThunk(
    'series/findPopularSeries',
    async () => {
        const response = await findPopularSeries();
        return response
    }
)

export const fetchTopRatedSeries = createAsyncThunk(
    'series/findTopRatedSeries',
    async () => {
        const response = await findTopRatedSeries();
        return response
    }
)

export const fetchSeriesWithGenres = createAsyncThunk(
    "movies/findSeriesWithGenres",
    async (genres) => {
        const response = await findSeriesWithGenres(genres);
        return response
    }
)

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        status: "idle",
        data: {
            genres: null,
            movies: null,
            series: null,
       },
        error: null,
    },
    reducer: {},
    extraReducers: {
        [fetchMoviesGenres().fulfilled]: (state, action) => {
            state.data.genres = action.payload
        },
        [fetchSeriesGenres.fulfilled]: (state, action) => {
            state.data.genres = action.payload
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.data.movies = action.payload
        },
        [fetchLastPopularMovies.fulfilled]: (state, action) => {
            state.data.movies = action.payload
        },
        [fetchTopRatedMovies.fulfilled]: (state, action) => {
            state.data.movies = action.payload
        },
        [fetchMoviesWithGenres.fulfilled]: (state, action) => {
            state.data.movies = action.payload
        },
        [fetchSeries.fulfilled]: (state, action) => {
            state.data.movies = action.payload
        },
        [fetchPopularSeries.fulfilled]: (state, action) => {
            state.data.series = action.payload
        },
        [fetchTopRatedSeries.fulfilled]: (state, action) => {
            state.data.series= action.payload
        },
        [fetchSeriesWithGenres.fulfilled]: (state, action) => {
            state.data.movies = action.payload
        },

    }
})

export default movieSlice.reducer




