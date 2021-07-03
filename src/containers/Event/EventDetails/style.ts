import { Dimensions, StyleSheet } from 'react-native';
import colors from '@app/styles/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		padding: 0,
		margin: 0,
	},
	image: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height * 0.4,
	},
	content: {
		width: Dimensions.get('window').width,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderWidth: 16,
		borderColor: colors.white
	},
	description: {
        paddingVertical:12
	},

    listItem: {
		backgroundColor: colors.backgroundColor1
	},
	listItemContent: {
		alignSelf: 'flex-start'
	},
	listAction:{
		flexDirection:'row'
	}
});

export default styles;