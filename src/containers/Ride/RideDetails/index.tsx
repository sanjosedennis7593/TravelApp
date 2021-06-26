import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainView from './components/MainView';

import { joinEvent } from '@app/services/event';

type Props = {
    route: object
}

interface JoinPayload  {
    event_id: string,
    user_id: string
}
const RideDetails = (props: Props) => {
    const { route } = props;
    const { user } = useSelector(state => {
        return {
            user: state.user
        }
    });

    const [isLoading, setIsLoading] = useState(false);


    const handleJoin = async (eventId:string, userId: string): void => {

        try {
            setIsLoading(true);
            console.log('Handle Join eventId', eventId)
            console.log('Handle Join userId', userId)
            const response = await joinEvent(eventId,userId);
            console.log('handleJoin response',response);
            if(response)  {
                setIsLoading(false);
            }
        } catch (e) {
            console.log('handleJoin error',e)
            setIsLoading(false);
        }
    }

    return <MainView event={route.params} handleJoin={handleJoin} isLoading={isLoading} user={user.currentUser} />;
}

export default RideDetails;