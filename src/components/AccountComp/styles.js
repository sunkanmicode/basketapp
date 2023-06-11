import {StyleSheet, TextInput} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#1c305c',
    // flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  wrapper2: {
    backgroundColor: colors.primary,
    // flex: 1,
    justifyContent: 'center',
    paddingBottom: 100,
    position: 'relative',

    // height: 250
  },
  shopLogo: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: colors.primary,
    // marginRight: 10,
  },
});