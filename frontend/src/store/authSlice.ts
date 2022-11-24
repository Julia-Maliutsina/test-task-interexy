import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IRegister, IAuth } from 'interfaces/User';
import { LOCAL_AUTH_ENDPOINT } from 'constants/endpoint';

export const authorizeUser = createAsyncThunk(
  'auth/signin',
  async (params: IAuth, { rejectWithValue }) => {
    try {
      const requestBody = JSON.stringify(params);
      const response = await fetch(`${LOCAL_AUTH_ENDPOINT}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });
      if (response.ok) {
        return response.json();
      } else {
        const responseError = await response.json();
        return rejectWithValue(responseError.message);
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
      const response = await fetch(`${LOCAL_AUTH_ENDPOINT}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });
      if (response.ok) {
        return response.json();
      } else {
        const responseError = await response.json();
        return rejectWithValue(responseError.message);
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
    successMessage: '',
    errorMessage: '',
  },
  reducers: {
    signOut: (state) => {
      state.currentUser = '';
      state.accessToken = '';
      state.errorMessage = '';
      state.successMessage = '';
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
        state.errorMessage = '';
        state.currentUser = action.payload.user.id;
        state.accessToken = action.payload.token;
        state.successMessage = 'Signed in successfully';
      })
      .addCase(authorizeUser.rejected, (state: any) => {
        state.successMessage = '';
        state.currentUser = {};
        state.accessToken = '';
        state.errorMessage = 'User not found';
      })
      .addCase(registerUser.pending, () => {})
      .addCase(registerUser.fulfilled, (state: any, action: any) => {
        state.errorMessage = '';
        state.currentUser = action.payload.user.id;
        state.accessToken = action.payload.token;
        state.successMessage = 'Signed up successfully';
      })
      .addCase(registerUser.rejected, (state: any) => {
        state.successMessage = '';
        state.currentUser = {};
        state.accessToken = '';
        state.errorMessage = 'Registration failed';
      });
  },
});

export const { signOut } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
