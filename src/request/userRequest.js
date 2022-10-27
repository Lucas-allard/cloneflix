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

export const addToWatchList = async (type, id, data) => {
    let transformData = {
        "media_type": type,
        "media_id": data.id,
        "watchlist": true
    }
    console.log(data.id)
    transformData = JSON.stringify(transformData);
    return await axios.post(`${ENTRYPOINT}/3/account/${id}/watchlist?language=fr`, transformData, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json;charset=utf-8"

        }
    })
        .then(response => console.log(response))
        .catch(e => console.log(e))

}

export const removeToWatchList = async (type, id, data) => {
    console.log("remove")
    let transformData = {
        "media_type": type,
        "media_id": data.id,
        "watchlist": false
    }
    try {
        transformData = JSON.stringify(transformData);
        console.log(transformData)
        const deleteData = await axios.post(`${ENTRYPOINT}/3/account/${id}/watchlist?language=fr`, transformData, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                "Content-Type": "application/json;charset=utf-8"

            }
        })
        console.log(deleteData)
    } catch(e) {
        console.log(e)
    }



    // if (type === "movie") {
    //     const data = findWatchListMovies(id);
    //     return data;
    // } else {
    //     const data = findWatchListSeries(id);
    //     return data;
    // }

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