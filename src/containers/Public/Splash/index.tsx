import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import styles from './style';


const Splash = (props) => {
    const { navigation } = props;
    const selectorProps = useSelector(state => {
        return {
            user: state.user
        }
    });
    console.log('selectorProps', selectorProps.user.currentUser.Session)
    useEffect(() => {
        if (selectorProps.user.currentUser && selectorProps.user.currentUser.Session) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Home' }
                    ],
                })
            );
        } else {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'SignIn' },
                    ],
                })
            );
        }

        return () => {
            // cleanup
        }
    }, [selectorProps.user])

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
        </View>
    );
}


export default Splash;