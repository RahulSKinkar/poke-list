import axios from 'axios'

// Get Poke List
export const getPokeListApi = () => {
    const requestUrl = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;
    return getRequest(requestUrl)
}

const getRequest = (requestUrl) => {
    return axios.get(requestUrl)
        .then((res) => {
            return res.data;
        }, (err) => {
            throw new Error(err);
        })
}