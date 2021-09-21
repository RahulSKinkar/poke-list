import { getPokeListApi, getPokemonDetailsApi } from '../apis/api'

//action creators
const pokeList = (list) => {
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


export const sortPokemonDetails = (data) => {
    return {
        type: 'SORT_DETAILS',
        data
    }
}

export const updatePokeListState = (data) => {
    return {
        type: 'UPDATE_STATE_DETAILS',
        data
    }
}

export const updatePokeApi = (api) => {
    return {
        type: 'UPDATE_POKE_API',
        api
    }
}

export const updateCardNumDatails = (data) => {
    return {
        type: 'UPDATE_CARD_NUM_DETAILS',
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
export const getPokeList = (url, limit = '10') => {
    return async (dispatch, getState) => {
        try {
            const requestUrl = url || `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
            const pokemonListData = await getPokeListApi(requestUrl)
            dispatch(pokeList(pokemonListData));
            dispatch(updatePokeApi(requestUrl));

            pokemonListData.results.map(poke_item => {
                dispatch(getPokemonDetails(poke_item.url));
            })

        } catch (err) {
            dispatch(showError(err));
        }
    }
}

//async handlers
export const getPokemonDetails = (url) => {
    return (dispatch, getState) => {
        return getPokemonDetailsApi(url)
            .then((res) => {

                const resBody = {
                    name: res.name,
                    abilities: res.abilities,
                    height: res.height,
                    weight: res.weight,
                    id: res.id,
                    species: res.species,
                    moves: res.moves,
                    base_experience: res.base_experience,
                    sprites: res.sprites,
                    img: res.sprites.other["official-artwork"]["front_default"]
                }
                dispatch(setPokemonDetails(resBody))
            })
            .catch((err) => {
                console.log(err)
                dispatch(showError(err));
            })
    }
}