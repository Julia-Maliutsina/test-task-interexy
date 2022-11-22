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
  'characters/fetchAll',
  async (page: Number, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page || 1}`);
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

export const fetchOneCharacter = createAsyncThunk(
  'characters/fetchOne',
  async (characterId: String, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
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
  name: 'characters',
  initialState: {
    characters: [] as ICharacter[],
    pages: 0,
    character: emptyCharacter,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCharacters.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCharacters.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.characters = action.payload.results;
        state.pages = action.payload.info.pages;
      })
      .addCase(fetchAllCharacters.rejected, (state: any) => {
        state.isLoading = false;
      })
      .addCase(fetchOneCharacter.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(fetchOneCharacter.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.character = action.payload;
      })
      .addCase(fetchOneCharacter.rejected, (state: any) => {
        state.isLoading = false;
        state.character = emptyCharacter;
      });
  },
});

const charactersReducer = charactersSlice.reducer;

export default charactersReducer;
