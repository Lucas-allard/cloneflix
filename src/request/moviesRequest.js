import axios from "axios";
import {ENTRYPOINT} from "../store/config/entrypoint";
import {TOKEN} from "../store/config/token";

export const findMoviesGenres = async () => {
    const data = await axios.get(`${ENTRYPOINT}/3/genre/movie/list?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e));

    return data.genres
}

export const findSeriesGenres = async () => {
    const data = await axios.get(`${ENTRYPOINT}/3/genre/tv/list?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e));

    return data.genres
}

export const findMovie = async (id) => {
    const data = await axios.get(`${ENTRYPOINT}/3/movie/${id}?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))
    return data
}

export const findMovies = async () => {
    const data = await axios.get(`${ENTRYPOINT}/3/discover/movie?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))

    return data.results
}

export const findLastPopularMovies = async () => {
    const data = await axios.get(`${ENTRYPOINT}/3/movie/popular?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))

    return data.results
}

export const findTopRatedMovies = async () => {
    const data = await axios.get(`${ENTRYPOINT}/3/movie/top_rated?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))

    return data.results
}

export const findMoviesWithGenre = async (genre) => {
    const data = await axios.get(`${ENTRYPOINT}/3/discover/movie?language=fr&with_genres=${genre}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))

    return data.results
}

export const findSeries = async () => {
    const data = await axios.get(`${ENTRYPOINT}/3/discover/tv?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))

    return data.results
}

export const findPopularSeries = async () => {
    const data = await axios.get(`${ENTRYPOINT}/3/tv/popular?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))

    return data.results
}

export const findTopRatedSeries = async () => {
    const data = await axios.get(`${ENTRYPOINT}/3/tv/top_rated?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))

    return data.results
}

export const findSeriesWithGenres = async (genre) => {
    const data = await axios.get(`${ENTRYPOINT}/3/discover/tv?language=fr&with_genres=${genre}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))

    return data.results
}
