import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../helper/axiosInstance';
import {
  usersAuthStart,
  usersAuthSuccess,
  usersAuthFail,
  usersLogOutSuccess,
} from './index';

export const authUsersLogin = async (user, dispatch) => {
  console.log(user, 'api');
  dispatch(usersAuthStart());
  try {
    const res = await axiosInstance.post('auth/login', user);
    console.log(res.data, 'userAuth');
    //AsyncStorage.setItem('token', res.data.auth_key);
    AsyncStorage.setItem('token', res.data.token);
    AsyncStorage.setItem('user', JSON.stringify(res.data));
    dispatch(usersAuthSuccess(res.data));
  } catch (err) {
    dispatch(usersAuthFail(err.message));
    console.log(err.message, 'authLoginError');
  }
};
export const userLogOut = dispatch => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispatch(usersLogOutSuccess());
};
