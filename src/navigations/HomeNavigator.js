import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '../components/CustomIcon';
import colors from '../theme/colors';
import HomeScreens from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import AccountScreen from '../screens/AccountScreen';
import CartScreen from '../screens/CartScreen';


const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="ACCOUNTSCREEN"
        screenOptions={({route}) => ({
          header: () => null,
          // tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color, type}) => {
            let iconName;
            if (route.name === 'HOMESCREEN') {
              iconName = focused ? 'home' : 'home-outline';
              type = 'Ionicons';
              size = focused ? 20 : 18;
              color = focused ? colors.primary : colors.grey;
            } else if (route.name === 'SAVEDSCREEN') {
              iconName = focused ? 'star' : 'star-o';
              type = 'FontAwesome';
              color = focused ? colors.primary : colors.grey;
              size = focused ? 20 : 18;
            } else if (route.name === 'ACCOUNTSCREEN') {
              iconName = focused ? 'user' : 'user-o';
              type = 'FontAwesome';
              size = focused ? 20 : 18;
              color = focused ? colors.primary : colors.grey;
            } else if (route.name === 'CARTSCREEN') {
              iconName = focused ? 'cart-sharp' : 'cart-outline';
              type = 'Ionicons';
              size = focused ? 20 : 18;
              color = focused ? colors.primary : colors.grey;
            }
            return (
              <Icon type={type} name={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: colors.primary,
        })}>
        <Tab.Screen
          name="HOMESCREEN"
          component={HomeScreens}
          options={({route}) => ({
            tabBarLabel: 'Home',
            tabBarLabelStyle: {paddingBottom: 8},
            // tabBarStyle: {display: getTabBarVisibility(route)},
          })}
        />
        <Tab.Screen
          name="SAVEDSCREEN"
          component={SavedScreen}
          options={{
            tabBarLabel: 'Saved',
            tabBarLabelStyle: {paddingBottom: 8},
          }}
        />

        <Tab.Screen
          name="ACCOUNTSCREEN"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarLabelStyle: {paddingBottom: 8},
          }}
        />
        <Tab.Screen
          name="CARTSCREEN"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle: {paddingBottom: 8},
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default HomeNavigator