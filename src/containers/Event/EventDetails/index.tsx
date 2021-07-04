import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainView from './components/MainView';

// REDUX
import { setEventsList } from '@app/redux/event/action';

// SERVICES
import { getEventById, joinEvent, deleteJoiners, updateJoinerStatus } from '@app/services/event';

// TYPES
import { Event } from '@app/types/events'
type Props = {
    navigation:{
        params: Object
    }
    route: {
        params: Object
    }
}


const EventDetails = (props: Props) => {
    const { navigation,route } = props;

    const dispatch = useDispatch();
    const { event, user } = useSelector(state => {
        return {
            event: state.event,
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

    const handleUpdateParentEvent = (selectedEvent) => {
        const updatedEvent = event.list.map((item:Event) => {
            if(item._id === selectedEvent._id) {
                return {
                    ...selectedEvent
                }
            }
            return item;
        });

        dispatch(setEventsList(updatedEvent));
    }
    


    const handleJoin = async (eventId: string, userId: string) => {
        try {
            if (!isJoined) {
                setIsLoading(true);
                const joinResponse = await joinEvent(eventId, userId);
                console.log('Join Response', joinResponse)
                if(joinResponse && joinResponse.createJoiners) {
                    setCurrentEvent(joinResponse.createJoiners.event);

                    handleUpdateParentEvent(joinResponse.createJoiners.event);
               
                }
            }

        } catch (e) {
            console.log('handleJoin error', e)
            setIsLoading(false);
        }
    }

    const handleLeave = async (joinerId: string, eventId: string) => {
        try {
            const deleteJoinerResponse = await deleteJoiners(joinerId);
            if (deleteJoinerResponse.deleteJoiners) {

                handleUpdateParentEvent(deleteJoinerResponse.deleteJoiners.event);
                setCurrentEvent(deleteJoinerResponse.deleteJoiners.event);
     
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
                handleUpdateParentEvent(joinerResponse.updateJoiners.event);
            }
        } catch (e) {
            console.log('handleLeave error', e)
        }
    }

    

    const handleRedirect = function<T>(data:T) {
        navigation.navigate('CreateUpdateEvent',data);
    }

    console.log('EventDetails event',event)

    return <MainView event={currentEvent} handleJoin={handleJoin} handleLeave={handleLeave} handleStatus={handleStatus} handleRedirect={handleRedirect} isJoined={isJoined} isLoading={isLoading} user={user.currentUser} />;
}

export default EventDetails;