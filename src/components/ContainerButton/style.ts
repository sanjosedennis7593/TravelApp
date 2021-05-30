import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const style = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: Dimensions.get('window').height / 5, 
    justifyContent: 'flex-end',
    marginBottom: 16,
    width: Dimensions.get('window').width / 2 - 24, 
  },

  title: {
    fontWeight: 'bold',
    color: colors.backgroundColor1,
    padding: 16
  },

});

export default style;