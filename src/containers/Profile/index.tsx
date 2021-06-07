import React from 'react';
import { useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import { requestLogout } from '@app/redux/user/action';


import MainView from './components/MainView';


const Profile = (props: any) => {
    const dispatch = useDispatch();
    const { navigation } = props;

    const handleLogout = () => {
        dispatch(requestLogout());
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'SignIn' },
                ],
            })
        );
    }
    return <MainView handleLogout={handleLogout} />;
}

export default Profile;