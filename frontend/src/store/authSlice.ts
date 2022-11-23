import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRegister, IAuth } from 'interfaces/User';

export const authorizeUser = createAsyncThunk(
  'auth/signin',
  async (params: IAuth, { rejectWithValue }) => {
    try {
      const requestBody = { email: params.email, password: params.password };
      const response = await fetch(`http://localhost:4000/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        if (params.rememberUser) {
          const responseData = await response.json();
          window.localStorage.setItem('token', responseData.token);
        }
        return response.json();
      } else {
        return rejectWithValue('User not found');
      }
    } catch (e) {
      const message = <{ message: string }>e;
      return rejectWithValue(message);
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/signup',
  async (params: IRegister, { rejectWithValue }) => {
    try {
      const requestBody = JSON.stringify({
        name: params.name,
        surname: params.surname,
        email: params.email,
        birth: params.birth,
        location: params.location,
        gender: params.gender,
        password: params.password,
      });
      const response = await fetch(`http://localhost:4000/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });
      if (response.ok) {
        if (params.rememberUser) {
          const responseData = await response.json();
          window.localStorage.setItem('token', responseData.token);
        }
        return response.json();
      } else {
        return rejectWithValue('Registration failed');
      }
    } catch (e) {
      const message = <{ message: string }>e;
      return rejectWithValue(message);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    currentUser: '',
  },
  reducers: {
    signOut: (state) => {
      state.currentUser = '';
      state.accessToken = '';
      window.sessionStorage.clear();
      window.localStorage.clear();
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorizeUser.pending, () => {})
      .addCase(authorizeUser.fulfilled, (state: any, action: any) => {
        state.currentUser = action.payload.user.id;
        state.accessToken = action.payload.token;
        window.sessionStorage.setItem('token', action.payload.token);
      })
      .addCase(authorizeUser.rejected, (state: any) => {
        state.currentUser = {};
        state.accessToken = '';
      })
      .addCase(registerUser.pending, () => {})
      .addCase(registerUser.fulfilled, (state: any, action: any) => {
        state.currentUser = action.payload.user.id;
        state.accessToken = action.payload.token;
        window.sessionStorage.setItem('token', action.payload.token);
      })
      .addCase(registerUser.rejected, (state: any) => {
        state.currentUser = {};
        state.accessToken = '';
      });
  },
});

export const { signOut } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
