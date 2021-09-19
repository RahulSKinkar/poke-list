import { getPokeListApi } from '../apis/api'

//action creators
const pokeList = (list) => {
    return {
        type: 'FETCH_LIST',
        list
    }
}

const showError = (error) => {
    return {
        type: 'SHOW_ERROR',
        error
    }
}

//async handlers
export const getPokeList = () => {
    return (dispatch, getState) => {
        return getPokeListApi()
            .then((res) => {
                dispatch(pokeList(res.results));
            })
            .catch((err) => {
                dispatch(showError(err));
            })
    }
}