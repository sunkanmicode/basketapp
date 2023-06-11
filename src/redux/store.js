import {configureStore} from '@reduxjs/toolkit';
import userAuthReducer from './usersAuthSlice/index';


export default configureStore({
  reducer: {
    authUser: userAuthReducer,
  },
});