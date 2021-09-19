import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { listReducer } from '../reducers/list_reducer'

const configure = (initialState = {}) => {

  const rootReducer = combineReducers({
    poke_list: listReducer
  });

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
  );

  return store;
};

export default configure;
