import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        padding: 8,
        flexWrap: 'wrap'
    },
    scrollView: {
		alignItems: 'center',
		paddingBottom: 20,
	},
    logOutButton:{
        width:'90%',
        marginTop:12
    }
});

export default style;