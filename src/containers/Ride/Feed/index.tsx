import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { requestEvents } from '@app/redux/event/action';

import { Event } from '@app/types/event';

import MainView from './components/MainView';


const Feed = (props: any) => {
    const dispatch = useDispatch();
    const event = useSelector(state => state.event);

    const { navigation } = props;

    useEffect(() => {
        dispatch(requestEvents());
    },[]);


    const handleRedirect = (type: string, data:Event) => {
        navigation.navigate(type,data);
    }
    return <MainView {...event} handleRedirect={handleRedirect} />;
}

export default Feed;