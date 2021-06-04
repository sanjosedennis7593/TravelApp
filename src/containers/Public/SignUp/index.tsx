import React from 'react';

import MainView from './components/MainView';


const SignUp = (props: any) => {
    const { navigation } = props;
    return <MainView navigation={navigation} />;
}

export default SignUp;