import { getPokeListApi, getPokemonDetailsApi } from '../apis/api'

//action creators
const pokeList = (list) => {
    console.log(list, 'res')
    return {
        type: 'FETCH_LIST',
        list
    }
}

const setPokemonDetails = (data) => {
    return {
        type: 'SET_DETAILS',
        data
    }
}

const showError = (error) => {
    return {
        type: 'SHOW_ERROR',
        error
    }
}

//async handlers
export const getPokeList = (url, limit) => {
    return (dispatch, getState) => {
        return getPokeListApi(url, limit)
            .then((res) => {
                dispatch(pokeList(res));
            })
            .catch((err) => {
                dispatch(showError(err));
            })
    }
}

//async handlers
export const getPokemonDetails = (url) => {
    return (dispatch, getState) => {
        return getPokemonDetailsApi(url)
            .then((res) => {
                dispatch(setPokemonDetails(res));
            })
            .catch((err) => {
                dispatch(showError(err));
            })
    }
}