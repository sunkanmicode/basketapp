import {StyleSheet, TextInput} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  wrapper: {
    // backgroundColor: '#1c305c',
    // flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  shopLogo: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: colors.primary,
  },
  textLogo: {
    fontSize: 30,
    fontWeight: '700',
    marginHorizontal: 10,
    color: colors.primary,
  },
  textTitle: {
    color: '#000',
  },
  textInput: {
    flexDirection: 'row',
    width: 330,
    height: 50,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  loginBtn: {
    width: 300,
    height: 50,
    backgroundColor: '#1c305c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  socialbtn: {
    flexDirection: 'row',
    width: 150,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // marginLeft: 20,
  },
});
