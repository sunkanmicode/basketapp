import React, { useEffect, useState } from 'react'
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreens';
import AuthNavigation from './AuthNavigation';
import HomeNavigator from './HomeNavigator';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AppNavigator = () => {
  const dispatch = useDispatch();
  const{
     usersInfo: {
      data,
      isLoggedIn,
      loading,
      error,
     }
    } = useSelector(state => state.authUser);

    // console.log(data, isLoggedIn, loading, error, "8888");
    const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
    const [authLoad, setAuthLoad] = useState(false);

      const getUser = async () => {
        try {
          const user = await AsyncStorage.getItem('user');
          const token = await AsyncStorage.getItem('token');
          console.log({token,user}, 'user200')

          if (user || token) {
            setAuthLoad(true);
            setIsAuthenticated(true);
          } else {
            setAuthLoad(true);
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getUser();
        // getUsersInfoId(dispatch);
      }, [isLoggedIn]);

  


  return (
    <NavigationContainer>
      <StatusBar barStyle="white-content" backgroundColor="#000" />
      {isAuthenticated ? <HomeNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

export default AppNavigator;