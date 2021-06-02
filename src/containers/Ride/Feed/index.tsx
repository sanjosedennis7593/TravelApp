import React from 'react';

import MainView from './components/MainView';


const Feed = (props: any) => {
    const { navigation } = props;

    const handleRedirect = (type: string) => {
        navigation.navigate(type);
    }
    return <MainView handleRedirect={handleRedirect} />;
}

export default Feed;