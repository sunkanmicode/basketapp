import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from '../CustomIcon';
import colors from '../../theme/colors';

const AccountComp = ({categories, data}) => {
  return (
    <>
      <View style={styles.wrapper}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.shopLogo}>
            <Icon type="Ionicons" name="cart" size={20} color="#fff" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: 280,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginHorizontal: 10,
            }}>
            <Icon
              type="Feather"
              name="search"
              size={20}
              color="#333"
              style={{padding: 10}}
            />
            <TextInput style={{flex: 1, marginHorizontal: 10}} />
          </View>
          <Icon
            type="Ionicons"
            name="filter-outline"
            size={30}
            color={colors.primary}
          />
        </View>
      </View>
      <View style={styles.wrapper2}>
        <View style={{padding: 30, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: data?.image}}
            style={{height: 80, width: 80, borderRadius: 100}}
            resizeMode="contain"
          />
          <View>
            <Text style={{color: '#333', fontSize: 17}}>
              {data?.firstName} {data?.lastName}
            </Text>
            <Text style={{color: '#333'}}>{data?.email}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: 380,
          position: 'absolute',
          alignSelf: 'center',
          height: 600,
          top: 220,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View
          style={{
            alignSelf: 'center',
            paddingVertical: 30,
            margin: 10,
            // flexDirection: 'coloum',
          }}>
          {categories.map(category => (
            <TouchableOpacity
              key={category.name}
              onPress={category.onPress}
              style={{flexDirection: 'row', margin: 10}}>
              <Text style={{color: '#333', marginRight: 80}}>
                {category.icon}
              </Text>
              <Text style={{color: '#333'}}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};

export default AccountComp;
