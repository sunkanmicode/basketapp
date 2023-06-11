import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLogo: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
      marginVertical: 15,
  },
  titleText: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});
