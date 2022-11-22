import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchAllCaracters = createAsyncThunk(
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

export { fetchAllCaracters };
