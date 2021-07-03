import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MainView from './components/MainView';

import { getEventById, joinEvent, deleteJoiners, updateJoinerStatus } from '@app/services/event';

type Props = {
    route: {
        params:object
    }
}


const EventDetails = (props: Props) => {
    const { route } = props;
    const { user } = useSelector(state => {
        return {
            user: state.user
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<{} | null>(route.params);
    const isJoined = currentEvent && currentEvent.joiners.data.find(item => item.user._id === user?.currentUser?.user_id);

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


    const handleJoin = async (eventId: string, userId: string) => {
        try {
            if (!isJoined) {
                setIsLoading(true);
                const joinResponse = await joinEvent(eventId, userId);
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

    const handleLeave = async (joinerId: string, eventId: string) => {
        try {
            const joinerResponse = await deleteJoiners(joinerId);

            if (joinerResponse) {
                const eventResponse = await getEventById(eventId);
                if (eventResponse && eventResponse.findEventsByID) {
                    setCurrentEvent(eventResponse.findEventsByID);
                }
            }
        } catch (e) {
            console.log('handleLeave error', e)
        }
    }


    const  handleStatus = async (joinerId: string, status: string) => {
        try {
            const joinerResponse = await updateJoinerStatus(joinerId, status);
            console.log('joinerResponse',joinerResponse)
            if(joinerResponse && joinerResponse.updateJoiners) {
                setCurrentEvent(joinerResponse.updateJoiners.event);

            }
        } catch (e) {
            console.log('handleLeave error', e)
        }
    }

    return <MainView event={currentEvent} handleJoin={handleJoin} handleLeave={handleLeave} handleStatus={handleStatus} isJoined={isJoined} isLoading={isLoading} user={user.currentUser} />;
}

export default EventDetails;