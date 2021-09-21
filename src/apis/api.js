import axios from 'axios'

// Get Poke List
export const getPokeListApi = (requestUrl) => {
    return getRequest(requestUrl)
}

export const getPokemonDetailsApi = (url) => {
    return getRequest(url)
}

const getRequest = (requestUrl) => {
    return axios.get(requestUrl)
        .then((res) => {
            return res.data;
        }, (err) => {
            throw new Error(err);
        })
}