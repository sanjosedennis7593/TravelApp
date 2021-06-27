import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { requestEvents } from '@app/redux/event/action';

import { Event } from '@app/types/event';

import MainView from './components/MainView';


const Feed = (props: any) => {
    const dispatch = useDispatch();
    const { event, user} = useSelector(state => {
        return {
            event: state.event,
            user:state.user
        }
    });

    const { navigation } = props;

    useEffect(() => {
        dispatch(requestEvents());
    },[]);

    const handleRefresh = ():void => {
        dispatch(requestEvents());
    }

    const handleRedirect = (type: string, data:Event) => {
        navigation.navigate(type,data);
    }

    return <MainView {...event} handleRedirect={handleRedirect} handleRefresh={handleRefresh} user={user} />;
}

export default Feed;