import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#1c305c',
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
  getStartedBtn: {
    width: 250,
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
});