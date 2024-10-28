import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'
import { adminApi } from '../apis/adminApi';
import { doctorApi } from '../apis/doctorApi';
import { departmentApi } from '../apis/departmentApi';
import { serviceApi } from '../apis/serviceApi';
import adminReducer from '../slice/adminSlice';
import { appointmentApi } from '../apis/appointmentApi';
import { blogApi } from '../apis/blogApi';

const rootReducer = combineReducers({
  [adminApi.reducerPath]: adminApi.reducer,
  [doctorApi.reducerPath]: doctorApi.reducer,
  [departmentApi.reducerPath]: departmentApi.reducer,
  [serviceApi.reducerPath]: serviceApi.reducer,
  [appointmentApi.reducerPath]: appointmentApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
  adminSlice: adminReducer
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['adminApi', 'doctorApi', 'serviceApi', 'departmentApi', 'appointmentApi', 'blogApi'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      serializableCheck: false,
    }
  ).concat(
    adminApi.middleware,
    serviceApi.middleware,
    doctorApi.middleware,
    departmentApi.middleware,
    appointmentApi.middleware,
    blogApi.middleware
  )
})


export const persistor = persistStore(store)