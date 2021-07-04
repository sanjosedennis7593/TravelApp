import React from 'react';

import MainView from './components/MainView';


const Home = <T extends {}>(props: T) => {
    const { navigation } = props;

    const handleRedirect = (type:string) => {
        navigation.navigate(type);
    }
    return <MainView handleRedirect={handleRedirect} />;
}

export default Home;