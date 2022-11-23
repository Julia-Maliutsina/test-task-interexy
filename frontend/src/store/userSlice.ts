import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'interfaces/User';

const user_api = process.env.LOCAL_USERS_ENDPOINT;

export const fetchUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (params: undefined, { rejectWithValue }) => {
    try {
      const token = window.sessionStorage.getItem('token') || window.localStorage.getItem('token');
      const response = await fetch(`${user_api}/user`, {
        headers: { Authorization: 'Bearer ' + token },
      });
      if (response.ok) {
        return response.json();
      } else {
        const status = await response.status;
        const message = await response.json();
        const reject = { status, message: message.message };
        return rejectWithValue(reject);
      }
    } catch (e) {
      const message = <{ message: string }>e;
      const reject = {
        message: message,
        status: 500,
      };
      return rejectWithValue(reject);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {} as IUser,
    isLoading: false,
    error: {
      status: null,
      message: '',
    },
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
      .addCase(fetchUserInfo.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.error.message = action.payload.message;
        state.error.status = action.payload.status;
      });
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
