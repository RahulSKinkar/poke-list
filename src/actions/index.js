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

const showError = (error) => {
    return {
        type: 'SHOW_ERROR',
        error
    }
}

//async handlers
export const getPokeList = (url, limit) => {
    return async (dispatch, getState) => {
        try {
            const pokemonListData = await getPokeListApi(url, limit)
            dispatch(pokeList(pokemonListData));
            
            pokemonListData.results.map( poke_item => {
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