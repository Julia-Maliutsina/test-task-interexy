import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICharacter } from 'interfaces/Character';
import store from './store';

export interface CounterState {
  value: number;
  incrementAmount: number;
}

const emptyCharacter = {} as ICharacter;

export const fetchAllCharacters = createAsyncThunk(
  'caracters/fetchAll',
  async (page: Number, { rejectWithValue }) => {
    try {
      let fetchAPI = store.getState();
      const response = await fetch(fetchAPI.charactersReducer.fetchNext);
      if (response.ok) {
        return response.json();
      } else {
        return rejectWithValue('No caracters found');
      }
    } catch (e) {
      const message = <{ message: string }>e;
      return rejectWithValue(message);
    }
  },
);

export const charactersSlice = createSlice({
  name: 'caracters',
  initialState: {
    characters: [] as ICharacter[],
    character: emptyCharacter,
    isLoading: false,
    fetchNext: 'https://rickandmortyapi.com/api/character?page=1',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCharacters.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCharacters.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        const newCharacters = state.characters.concat(action.payload.results);
        state.characters = newCharacters;
        state.fetchNext = action.payload.info.next;
      })
      .addCase(fetchAllCharacters.rejected, (state: any) => {
        state.isLoading = false;
      });
    /*       .addCase(fetchSOneCaracter.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(fetchSOneCaracter.fullfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.caracter = action.payload.body;
      })
      .addCase(fetchSOneCaracter.rejected, (state: any) => {
        state.isLoading = false;
        state.caracter = emptyCaracter;
      }); */
  },
});

const charactersReducer = charactersSlice.reducer;

export default charactersReducer;
