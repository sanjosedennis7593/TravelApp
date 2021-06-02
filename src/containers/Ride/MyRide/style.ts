import { StyleSheet } from 'react-native';
import colors from '@app/styles/colors';


const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        flexWrap: 'wrap'
    },
    listItem: {
		backgroundColor: colors.backgroundColor1,
		paddingVertical: 16, 
		paddingHorizontal: 16
	},
	listItemContent: {
		alignSelf: 'flex-start',
		paddingTop: 8
	},
});

export default style;