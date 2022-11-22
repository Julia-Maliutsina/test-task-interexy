import { Action, AnyAction, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThunkMiddleware, ThunkAction, ThunkDispatch } from 'redux-thunk';
import caractersReducer from './caractersSlice';

const reducer = combineReducers({
  caractersReducer,
});
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;

export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<String>
>;
export type Dispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export default store;
