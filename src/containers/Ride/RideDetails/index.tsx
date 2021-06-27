import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainView from './components/MainView';

import { getEventById, joinEvent } from '@app/services/event';

type Props = {
    route: object
}


const RideDetails = (props: Props) => {
    const { route } = props;
    const { user } = useSelector(state => {
        return {
            user: state.user
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<{} | null>(route.params);
    const isJoined = currentEvent?.joiners.data.find(item => item.user._id === user?.currentUser?.user_id);

    useEffect(() => {
        if (route.params) {
            setCurrentEvent(route.params);
        }
    }, []);

    useEffect(() => {
        if (route.params) {
            setCurrentEvent(route.params);
        }
    }, [route.params]);


    const handleJoin = async (eventId: string, userId: string): void => {
        try {
            
            if (!isJoined) {
                setIsLoading(true);
                console.log('Handle Join eventId', eventId)
                console.log('Handle Join userId', userId)
                const joinResponse = await joinEvent(eventId, userId);
                console.log('handleJoin response', joinResponse);
                if (joinResponse) {
                    const eventResponse = await getEventById(eventId);
                    if (eventResponse && eventResponse.findEventsByID) {
                        setCurrentEvent(eventResponse.findEventsByID);
                        setIsLoading(false);
                    }
                }
            }

        } catch (e) {
            console.log('handleJoin error', e)
            setIsLoading(false);
        }

    }

    return <MainView event={currentEvent} handleJoin={handleJoin} isJoined={isJoined} isLoading={isLoading} user={user.currentUser} />;
}

export default RideDetails;