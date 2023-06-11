import {Alert} from 'react-native';
import React from 'react'
import AccountComp from '../../components/AccountComp'
import Icon from '../../components/CustomIcon';
import colors from '../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import { userLogOut } from '../../redux/usersAuthSlice/userAuthApi';


const AccountScreen = () => {
   const dispatch = useDispatch();
   const {
     usersInfo: {data, isLoggedIn, loading, error},
   } = useSelector(state => state.authUser);
    console.log(data, isLoggedIn, loading, error, '8888');

    const handleLogout = () => {
      console.log('click me');
      Alert.alert('Logout!', 'Are you sure you want to logout?', [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'Ok',
          onPress: () => {
            userLogOut(dispatch);
            console.log('removed');
          },
        },
      ]);
    };


  const categories = [
    {
      icon: (
        <Icon
          type="Ionicons"
          name="ios-notifications"
          color={colors.primary}
          size={20}
        />
      ),
      name: 'Notification',
      onPress: () => {},
    },
    {
      icon: (
        <Icon
          type="FontAwesome5"
          name="user-edit"
          color={colors.primary}
          size={20}
        />
      ),
      name: 'Edit profile',
      onPress: () => {},
    },
    {
      icon: <Icon type="Entypo" name="star" size={20} color={colors.primary} />,
      name: 'Wishlist',
      onPress: () => {},
    },
    {
      icon: (
        <Icon
          type="MaterialIcons"
          name="history-edu"
          size={20}
          color={colors.primary}
        />
      ),
      name: 'Order history',
      onPress: () => {},
    },
    {
      icon: (
        <Icon
          type="Ionicons"
          name="ios-location-sharp"
          size={20}
          color={colors.primary}
        />
      ),
      name: 'Track order',
      onPress: () => {},
    },
    {
      icon: (
        <Icon
          type="MaterialIcons"
          name="payments"
          size={20}
          color={colors.primary}
        />
      ),
      name: 'Payment option',
      onPress: () => {},
    },
    {
      icon: (
        <Icon
          type="Fontisto"
          name="player-settings"
          size={20}
          color={colors.primary}
        />
      ),
      name: 'settings',
      onPress: () => {},
    },
    {
      icon: (
        <Icon type="Ionicons" name="log-out" size={20} color={colors.primary} />
      ),
      name: 'Log-out',
      onPress: handleLogout,
    },
  ];



  return <AccountComp categories={categories} data={data} />;
}

export default AccountScreen