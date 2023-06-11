import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';

const OnboardingComp = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../images/onboarding.jpg')}
        style={{height: 900, width: 500}}
        resizeMode="cover">
        <View
          style={{
            paddingTop: 300,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.titleLogo}>
            <Icon name="shoppingcart" size={40} color="#fff" />
            <Text style={{fontSize: 30}}>Basket</Text>
          </View>
          <View style={{alignItems: 'center', marginBottom: 100}}>
            <Text style={styles.titleText}>Start Shopping.</Text>
            <Text style={styles.titleText}>Stay Happy.</Text>
            <Text style={styles.titleText}>Anything.</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 70}}>
          <View style={{alignSelf: 'center'}}>
            <Text style={{color: '#fff', fontSize: 20, color: colors.primary}}>
              Basket Online Marketplace
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 30,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.replace('LOGIN');
              }}>
              <Text style={{color: colors.primary}}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.replace('REGISTER');
            }}>
              <Text style={{color: colors.primary}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardingComp;
