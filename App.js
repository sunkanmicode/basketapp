import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigations'
import store from './src/redux/store.js';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}