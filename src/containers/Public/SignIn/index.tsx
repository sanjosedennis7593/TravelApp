import React from 'react';

import MainView from './components/MainView';


const SignIn = (props: any) => {
    const { navigation } = props;
    return <MainView navigation={navigation} />;
}

export default SignIn;