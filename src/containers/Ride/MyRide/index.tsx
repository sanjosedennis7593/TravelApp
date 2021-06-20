import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX
import { requestEventByUser } from '@app/redux/event/action';

// TYPES
import { Event } from '@appp/types/events';

import MainView from './components/MainView';


const MyRide = (props: any) => {
    const dispatch = useDispatch();
    const {event, user} = useSelector(state => {
        return {
            event: state.event,
            user: state.user
        }
    })
    const { navigation } = props;
    
    
    useEffect(() => {
        if((user && user.currentUser && user.currentUser && event.createdEvents.length === 0)) {
            dispatch(requestEventByUser(user.currentUser.user_id))
        }
    },[]);

    const handleRedirect = (type: string, data: Event) => {
        navigation.navigate(type,data);
    }
    return <MainView createdEvents={event.createdEvents} isLoading={event.isLoading} handleRedirect={handleRedirect} />;
}

export default MyRide;