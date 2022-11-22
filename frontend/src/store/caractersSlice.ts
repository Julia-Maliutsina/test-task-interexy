import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICaracter } from 'interfaces/Caracter';

export interface CounterState {
  value: number;
  incrementAmount: number;
}

const emptyCaracter = {} as ICaracter;

export const fetchAllCaracters = createAsyncThunk(
  'caracters/fetchAll',
  async (page: Number, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?${page || 0 + 1}`);
      if (response.status === 200) {
        return response.body;
      } else {
        return rejectWithValue('No caracters found');
      }
    } catch (e) {
      const message = <{ message: string }>e;
      return rejectWithValue(message);
    }
  },
);

export const caractersSlice = createSlice({
  name: 'caracters',
  initialState: {
    caracters: [],
    caracter: emptyCaracter,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCaracters.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCaracters.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.caracters = action.payload.body;
      })
      .addCase(fetchAllCaracters.rejected, (state: any) => {
        state.isLoading = false;
        state.caracters = [];
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

const caractersReducer = caractersSlice.reducer;

export default caractersReducer;
