import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { listReducer } from '../reducers/list_reducer'

const configure = () => {

  const persistConfig = {
    key: 'poke_list',
    storage: storage,
    whitelist: ['poke_list']
  };

  const rootReducer = combineReducers({
    poke_list: listReducer,
  });

  const pReducer = persistReducer(persistConfig, rootReducer);
  const middleware = composeWithDevTools(applyMiddleware(thunk))

  const store = createStore(
    pReducer,
    middleware,
  );

  const persistor = persistStore(store)

  return { persistor, store };
};

export default configure;
