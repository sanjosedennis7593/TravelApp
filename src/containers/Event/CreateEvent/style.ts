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
        padding: 8,
        flexWrap: 'wrap'
    },
    scrollViewContainer:{
        paddingVertical:12
    },
    scrollView: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    time: {
        backgroundColor: colors.backgroundColor1
    },
    dateContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width:'95%',
        paddingVertical: 8,
    },
    dateContainerWidth:{
        width:'100%'
    },
    dateButton: {
        paddingHorizontal: 8,
        margin: 5,
        // backgroundColor: colors.backgroundColor2,
        color: colors.primaryDark
    }
});

export default style;