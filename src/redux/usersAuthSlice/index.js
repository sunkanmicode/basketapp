import {createSlice} from '@reduxjs/toolkit';

export const usersAuthSlice = createSlice({
  name: 'authUser',
  initialState: {
    usersInfo: {
      data: {},
      isLoggedIn: false,
      loading: false,
      error: null,
    },
  },
  reducers: {
    usersAuthStart: state => {
      state.usersInfo.loading = true;
    },

    usersAuthSuccess: (state, action) => {
      state.usersInfo.loading = false;
      state.usersInfo.isLoggedIn = true;
      state.usersInfo.data = action.payload;
      state.usersInfo.error = null;
    },

    usersAuthFail: (state, action) => {
      state.usersInfo.error = action.payload;
      state.usersInfo.loading = false;
    },
    usersLogOutSuccess: (state, action) => {
      state.usersInfo.loading = false;
      state.usersInfo.isLoggedIn = false;
      state.usersInfo.data = null;
    },
  },
});

export const {
  usersAuthStart,
  usersAuthSuccess,
  usersAuthFail,
  usersLogOutSuccess,
} = usersAuthSlice.actions;
export default usersAuthSlice.reducer;
