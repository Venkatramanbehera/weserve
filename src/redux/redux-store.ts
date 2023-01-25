import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import vendorSlice from '../views/App/AddVendors/services/vendorSlice';
import appStateSlice from '../views/App/AppState/Services/appStateSlice';
import individualSlice from '../views/App/Individual/services/individualSlice';
import organizationSlice from '../views/App/Organization/services/organizationSlice';
import exampleSlice from '../views/App/Screen1/services/exampleSlice';
import loginSlice from '../views/Auth/Login/services/loginSlice';
import logger from 'redux-logger';
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['vendors'],
};

const rootReducer = combineReducers({
  example: exampleSlice,
  vendors: vendorSlice,
  login: loginSlice,
  appState: appStateSlice,
  organization: organizationSlice,
  individual: individualSlice,
});

const persistanceReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistanceReducer,
  middleware: [thunk, logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
