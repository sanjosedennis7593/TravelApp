import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    top: 0,
    marginBottom: 60,
  },
  wave: {
    backgroundColor: '#7017ff', 
    height: 100
  },
  svg: {
    position: 'absolute', 
    top: 90
  },
  titleContainer: {
    flex: 1, 
    padding: 16, 
    justifyContent: 'center', 
  },
  row: {
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  },

});

export default style;