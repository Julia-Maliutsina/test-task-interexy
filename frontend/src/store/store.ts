import { Action, AnyAction, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import charactersReducer from './charactersSlice';
import { useDispatch } from 'react-redux';

const reducer = combineReducers({
  charactersReducer,
});
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;

export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<String>
>;
type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();

export default store;
