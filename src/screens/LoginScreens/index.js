import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LoginComp from '../../components/LoginComp'
import {useDispatch, useSelector} from 'react-redux';
import { authUsersLogin } from '../../redux/usersAuthSlice/userAuthApi';


const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [form, setForm] = useState({});

    const {
      usersInfo: {data, isLoggedIn, loading, error},
    } = useSelector(state => state.authUser);
    console.log(data, isLoggedIn, loading, error, '8888');

  const onchangeForm = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    console.log(form, 'form');
    if (form.username && form.password) {
      authUsersLogin(form, dispatch);
    }
  };

  return (
    <LoginComp
      onchangeForm={onchangeForm}
      onSubmit={onSubmit}
      isSecureEntry={isSecureEntry}
      setIsSecureEntry={setIsSecureEntry}
      loading={loading}
      error={error}
      navigation={navigation}
    />
  );
};

export default LoginScreen