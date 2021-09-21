import axios from 'axios'

// Get Poke List
export const getPokeListApi = (url, limit = '10') => {
    const requestUrl = url || `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
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