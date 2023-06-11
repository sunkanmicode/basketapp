import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import styles from './styles';

const RegisterComp = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.shopLogo}>
            <Icon name="shoppingcart" size={30} color="#fff" />
          </View>
          <Text style={styles.textLogo}>Basket</Text>
        </View>
      </View>

      <View style={{alignItems: 'center', marginVertical: 30}}>
        <Text style={{color: '#fff', marginVertical: 10}}>Welcome to</Text>
        <Text style={{color: '#fff', fontSize: 30, marginVertical: 10}}>
          basket online store
        </Text>
        <Text style={{color: '#fff'}}>Basket is the not online store for </Text>
        <Text style={{color: '#fff'}}>both new and used products</Text>
      </View>
      <View style={{alignSelf: 'center', paddingVertical: 20}}>
        <Image
          source={require('../../images/family.png')}
          style={{height: 350, width: 200}}
          resizeMode="contain"
        />
      </View>
      <View style={{alignItems: 'center', paddingVertical: 50}}>
        <TouchableOpacity
          style={styles.getStartedBtn}
          onPress={()=>{
            navigation.replace('LOGIN');
          }}
          >
          <Text style={{marginHorizontal: 5}}>GET STARTED</Text>
          <Icon name="arrowright" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterComp;
