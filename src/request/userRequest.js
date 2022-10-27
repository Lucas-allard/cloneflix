import axios from "axios";
import {ENTRYPOINT} from "../store/config/entrypoint";
import {TOKEN} from "../store/config/token";

export const findUser = async () => {
    const data = await axios.get(`${ENTRYPOINT}/3/account?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e));
    return data;
}

export const findWatchListMovies = async (id) => {
    const data = await axios.get(`${ENTRYPOINT}/3/account/${id}/watchlist/movies?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))
    console.log(data.results)
    return data.results

}
export const findWatchListSeries = async (id) => {
    const data = await axios.get(`${ENTRYPOINT}/3/account/${id}/watchlist/tv?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))
    return data.results

}

export const addToWatchList = async (data) => {
    let transformData = {
        "media_type": data.type,
        "media_id": data.movie.id,
        "watchlist": true
    }
    transformData = JSON.stringify(transformData);
    return await axios.post(`${ENTRYPOINT}/3/account/${data.id}/watchlist?language=fr`, transformData, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json;charset=utf-8"

        }
    })
        .catch(e => console.log(e))

}

export const removeToWatchListMovies = async (data) => {
    let transformData = {
        "media_type": data.type,
        "media_id": data.movie.id,
        "watchlist": false
    }

    transformData = JSON.stringify(transformData);
    const deleteData = await axios.post(`${ENTRYPOINT}/3/account/${data.id}/watchlist?language=fr`, transformData, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json;charset=utf-8"

        }
    })


    const newData = await findWatchListMovies(data.id);
    return newData;
}

export const removeToWatchListSeries = async (data) => {
    let transformData = {
        "media_type": data.type,
        "media_id": data.movie.id,
        "watchlist": false
    }

    transformData = JSON.stringify(transformData);
    const deleteData = await axios.post(`${ENTRYPOINT}/3/account/${data.id}/watchlist?language=fr`, transformData, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json;charset=utf-8"

        }
    })

    const newData = findWatchListSeries(data.id);
    return newData;
}

export const searchData = async (query) => {
    const data = await axios.get(`${ENTRYPOINT}/3/search/multi?language=fr&query=${query}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json;charset=utf-8"

        }
    })
        .then(response => response.data)
        .catch(e => console.log(e))
    return data.results
}