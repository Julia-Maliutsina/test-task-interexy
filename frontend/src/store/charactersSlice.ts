import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICharacter } from 'interfaces/Character';
import { RICK_AND_MORTY_ENDPOINT } from 'constants/endpoint';

export const fetchAllCharacters = createAsyncThunk(
  'characters/fetchAll',
  async (page: Number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${RICK_AND_MORTY_ENDPOINT}?page=${page || 1}`);
      if (response.ok) {
        return response.json();
      } else {
        const status = response.status;
        const message = await response.json();
        const reject = { status, message };
        return rejectWithValue(reject);
      }
    } catch (e) {
      const message = <{ message: string }>e;
      const reject = {
        message: { error: message },
        status: 500,
      };
      return rejectWithValue(reject);
    }
  },
);

export const fetchOneCharacter = createAsyncThunk(
  'characters/fetchOne',
  async (characterId: String, { rejectWithValue }) => {
    try {
      const response = await fetch(`${RICK_AND_MORTY_ENDPOINT}/${characterId}`);
      if (response.ok) {
        return response.json();
      } else {
        const status = response.status;
        const message = await response.json();
        const reject = { status, message };
        return rejectWithValue(reject);
      }
    } catch (e) {
      const message = <{ message: string }>e;
      const reject = {
        message: { error: message },
        status: 500,
      };
      return rejectWithValue(reject);
    }
  },
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [] as ICharacter[],
    pages: 0,
    character: {} as ICharacter,
    isLoading: false,
    error: {
      status: null,
      message: '',
    },
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
      .addCase(fetchAllCharacters.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.error.message = action.payload.message.error;
        state.error.status = action.payload.status;
      })
      .addCase(fetchOneCharacter.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(fetchOneCharacter.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.character = action.payload;
      })
      .addCase(fetchOneCharacter.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.character = {} as ICharacter;
        state.error.message = action.payload.message.error;
        state.error.status = action.payload.status;
      });
  },
});

const charactersReducer = charactersSlice.reducer;

export default charactersReducer;
