import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreens';
import RegisterScreens from '../screens/RegisterScreens';
import Onboarding from '../screens/Onboarding';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{header: () => null}}>
      <AuthStack.Screen name="ONBOARDING" component={Onboarding} />
      <AuthStack.Screen name="LOGIN" component={LoginScreen} />
      <AuthStack.Screen name="REGISTER" component={RegisterScreens} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigation