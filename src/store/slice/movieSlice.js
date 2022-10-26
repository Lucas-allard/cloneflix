import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {
    findLastPopularMovies, findMovie,
    findMovies,
    findMoviesGenres,
    findMoviesWithGenre,
    findPopularSeries, findSerie,
    findSeries,
    findSeriesGenres, findSeriesWithGenre,
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

export const fetchMovie = createAsyncThunk(
    'movies/findMovie',
    async (id) => {
        const response = await findMovie(id)
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

export const fetchSerie = createAsyncThunk(
    'series/findSerie',
    async (id) => {
        const response = await findSerie(id);
        return response;
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
        const response = await findSeriesWithGenre(genres);
        return response
    }
)

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        status: "idle",
        data: {
            movie: null,
            movies: {
                genres: null,
                popularMovies: null,
                topRatedMovies: null,
                moviesWithGenre: {

                }
            },
            serie: null,
            series: {
                genres: null,
                popularSeries: null,
                topRatedSeries: null,
                seriesWithGenre: {

                }
            },
       },
        error: null,
    },
    reducer: {},
    extraReducers: {
        [fetchMoviesGenres.fulfilled]: (state, action) => {
            state.data.movies.genres = action.payload
        },
        [fetchSeriesGenres.fulfilled]: (state, action) => {
            state.data.series.genres = action.payload
        },
        [fetchMovie.fulfilled]: (state, action) => {
            state.data.movie = action.payload
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.data.movies = action.payload
        },
        [fetchLastPopularMovies.fulfilled]: (state, action) => {
            state.data.movies.popularMovies = action.payload
        },
        [fetchTopRatedMovies.fulfilled]: (state, action) => {
            state.data.movies.topRatedMovies = action.payload
        },
        [fetchMoviesWithGenres.fulfilled]: (state, action) => {
            state.data.movies.moviesWithGenre = action.payload
        },
        [fetchSerie.fulfilled]: (state, action) => {
            state.data.serie = action.payload
        },
        [fetchSeries.fulfilled]: (state, action) => {
            state.data.series = action.payload
        },
        [fetchPopularSeries.fulfilled]: (state, action) => {
            state.data.series.popularSeries = action.payload
        },
        [fetchTopRatedSeries.fulfilled]: (state, action) => {
            state.data.series.topRatedSeries = action.payload
        },
        [fetchSeriesWithGenres.fulfilled]: (state, action) => {
            state.data.series.seriesWithGenre = action.payload
        },

    }
})

export default movieSlice.reducer




