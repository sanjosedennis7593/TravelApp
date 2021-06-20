import React from 'react';
import { useSelector } from 'react-redux';

import MainView from './components/MainView';


const CreateRide = (props: any) => {
    const state = useSelector(state => {
        return {
            user: state.user
        }
    })

    return <MainView user={state.user} />;
}

export default CreateRide;