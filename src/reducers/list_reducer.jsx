export const initialState = {
  list: {
    results: []
  },
  details: {}
}

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      console.log(action.list)
      return { ...state, list: {...action.list} }; 
      
    case 'SET_DETAILS':
      return {
        ...state,
        details: {
          ...state.details,
          [action.data.id]: [action.data][0]
        }
      }
    default:
      return state;
  }
}
