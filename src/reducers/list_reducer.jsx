export const initialState = {
  list: {
    results: [],
    count: '',
    next: '',
    previous: ''
  },
  details: [],
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

    case 'UPDATE_STATE_DETAILS':
      return action.data

    case 'SORT_DETAILS':
      return {
        ...state,
        details: action.data,
      }
    default:
      return state;
  }
}
