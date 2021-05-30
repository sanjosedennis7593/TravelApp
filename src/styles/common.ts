import { StyleSheet, StatusBar, Platform } from 'react-native';
import colors from './colors';

const common = StyleSheet.create({
  container: {
		backgroundColor: colors.backgroundColor1,
		flex: 1,
    padding: 16,
  },

  scrollView: {
    flex: 1,
    backgroundColor: colors.backgroundColor1,
    padding: 16,
  },
  
  padder: {
    padding: 16,
  },

  fullWidthButton: {
    width: '90%'
  },

  roundedButton: {
    borderRadius: 30
  },

  linkButton: {
    borderWidth: 0,
  },

  safeArea: {
    backgroundColor: colors.primary,
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
  },

  safeAreaView: {
    backgroundColor: colors.backgroundColor1,
		flex: 1,
  },

  font: {
    fontFamily: 'Nunito'
  },

  primaryColoredText: {
    color: colors.primary
  },

  bold: {
    fontWeight: 'bold'
  },

  smallText: {
    fontSize: 14
  },

  row: {
    flexDirection: 'row'
  },

  error: {
    color: colors.error
  }

});

export default common;