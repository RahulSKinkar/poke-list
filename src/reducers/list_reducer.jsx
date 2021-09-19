export const initialState = []

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return [...action.list];

    default:
      return state;
  }
}
