import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const style = StyleSheet.create({
  container: {
    borderBottomColor: colors.secondaryText,
    borderBottomWidth: 1,
  },
  focusContainer: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  disabledContainer: {
    borderBottomColor: colors.disabled,
  },
  correctContainer: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  errorContainer: {
    borderBottomColor: colors.error,
  },


  focusInput: {
    color: colors.primary
  },
  disabledInput: {
    color: colors.disabled
  },
  correctInput: {
    color: colors.primary
  },
  errorInput: {
    color: colors.error
  },


  image: {

  },
  title: {
    fontWeight: '500',
    padding: 10,
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
  }

});

export default style;