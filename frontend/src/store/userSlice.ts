import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'interfaces/User';

export const fetchUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (params: undefined, { rejectWithValue }) => {
    try {
      const token = window.sessionStorage.getItem('token');
      const response = await fetch(`http://localhost:4000/user`, {
        headers: { Authorization: 'Bearer ' + token },
      });
      if (response.ok) {
        return response.json();
      } else {
        return rejectWithValue('User info not found');
      }
    } catch (e) {
      const message = <{ message: string }>e;
      return rejectWithValue(message);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {} as IUser,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(fetchUserInfo.rejected, (state: any) => {
        state.isLoading = false;
      });
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
