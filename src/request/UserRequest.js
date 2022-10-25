import axios from "axios";
import {ENTRYPOINT} from "../store/config/entrypoint";
import {TOKEN} from "../store/config/token";

export const findUser = async () => {
    const data = await axios.get(`${ENTRYPOINT}/3/account?language=fr`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
        .catch(e => console.log(e));
    return data;
}