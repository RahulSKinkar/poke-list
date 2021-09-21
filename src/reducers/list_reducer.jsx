export const initialState = {
  list: {
    results: [],
    count: '',
    next: '',
    previous: ''
  },
  details: [],
  api: '',
  card_num: '10',
  mainDetails: []
}

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return { ...state, list: { ...action.list }, details: [], mainDetails: [] };

    case 'SET_DETAILS':
      return {
        ...state,
        details: [
          ...state.details,
          action.data
        ],
        mainDetails: [
          ...state.details,
          action.data
        ]
      }

    case 'UPDATE_POKE_API':
      return {
        ...state,
        api: action.api,
      }

    case 'UPDATE_STATE_DETAILS':
      return action.data

    case 'UPDATE_CARD_NUM_DETAILS':
      return {
        ...state,
        card_num: action.data,
      }

    case 'SORT_DETAILS':
      return {
        ...state,
        details: action.data,
      }

    default:
      return state;
  }
}
