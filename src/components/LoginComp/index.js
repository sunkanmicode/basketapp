import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import colors from '../../theme/colors';

const LoginComp = ({
  onchangeForm,
  onSubmit,
  isSecureEntry,
  setIsSecureEntry,
  loading,
  error,
  navigation,
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
        <Text style={{color: '#333', fontSize: 20, fontWeight: '800'}}>
          Log into your account
        </Text>
        <View style={{marginVertical: 20, alignItems: 'center'}}>
          <Text style={styles.textTitle}>Enter your email and password</Text>
          <Text style={styles.textTitle}>to access your account or create</Text>
          <Text style={styles.textTitle}>an account</Text>
        </View>
      </View>
      <View style={{alignSelf: 'center'}}>
        {error && (
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#bc544b',
              width: 200,
              height: 30,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
              }}>
              Wrong credentials
            </Text>
          </View>
        
        )}

        <View style={styles.textInput}>
          <Feather name="mail" size={25} color="#FF9900" />

          <TextInput
            placeholder="enter your name"
            style={{
              flex: 1,
              color: '#000',
              marginLeft: 10,
            }}
            onChangeText={value => {
              onchangeForm({name: 'username', value});
            }}
          />
        </View>
        <View style={[styles.textInput, {marginVertical: 10}]}>
          <Feather name="key" size={25} color="#FF9900" />
          <TextInput
            placeholder="enter your password"
            style={{
              flex: 1,
              color: '#000',
              marginLeft: 10,
            }}
            secureTextEntry={isSecureEntry}
            onChangeText={value => {
              onchangeForm({name: 'password', value});
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setIsSecureEntry(prev => !prev);
            }}>
            {isSecureEntry ? (
              <Feather name="eye-off" size={25} color="#000" />
            ) : (
              <Feather name="eye" size={25} color="#000" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setToggleCheckBox(!toggleCheckBox);
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 5,
          marginVertical: 15,
        }}>
        {toggleCheckBox ? (
          <MaterialIcons
            name="check-box-outline-blank"
            size={30}
            color="#000"
          />
        ) : (
          <MaterialIcons name="check-box" size={30} color="#000" />
        )}

        <Text style={{color: '#333', marginLeft: 20}}>Remember me</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center', paddingVertical: 30}}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            onSubmit();
            // navigation.navigate('LOGIN');
          }}>
          {loading ? (
            <Text style={{marginHorizontal: 5, fontSize: 16}}>LOADING...</Text>
          ) : (
            <Text style={{marginHorizontal: 5, fontSize: 16}}>LOGIN</Text>
          )}
        </TouchableOpacity>
        <Text style={{color: colors.primary, paddingVertical: 30}}>
          Forgot password
        </Text>
        <Text style={{color: '#333'}}>-- or contiune with --</Text>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TouchableOpacity style={styles.socialbtn}>
          <FontAwesome name="facebook-official" size={30} color="blue" />
          <Text style={{color: '#333', marginLeft: 10}}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialbtn, {marginLeft: 40}]}>
          <FontAwesome name="google" size={30} color="green" />
          <Text style={{color: '#333', marginLeft: 10}}>Google</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 50,
        }}>
        <Text style={{color: '#333'}}>Don"t you have an account?</Text>
        <Text style={{color: colors.primary}}>Sign up</Text>
      </View>
    </View>
  );
};

export default LoginComp;
