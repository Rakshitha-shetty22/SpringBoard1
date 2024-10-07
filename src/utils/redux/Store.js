// import {configureStore} from '@reduxjs/toolkit'
// import roleSlice from '../redux/roleSlice'
// import addSlice from '../redux/addSlice'

// const Store = configureStore({
//     reducer: {
//         role: roleSlice,
//         add:  addSlice,
//     }
// })

// export default Store;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import roleSlice from '../redux/roleSlice';
import addSlice from '../redux/addSlice';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  role: roleSlice,
  add: addSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(Store);
export default Store;
