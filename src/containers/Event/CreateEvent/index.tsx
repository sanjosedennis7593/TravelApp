import React,{ useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

// REDUX
import { setEventsList } from '@app/redux/event/action';

import MainView from './components/MainView';

type Props = {
    route: {
        params:object
    }
}

const CreateUpdateEvent = <T extends Props>(props: T) => {
    const { route } = props;

    const dispatch = useDispatch();
    const { event, user } = useSelector(state => {
        return {
            event: state.event,
            user: state.user
        }
    });

    const [currentEvent, setCurrentEvent] = useState<{} | null>(null);

    useEffect(() => {
        if (route.params) {
            setCurrentEvent(route.params);
        }
    }, []);

    const handleUpdateParentEvent = (selectedEvent) => {
        const updatedEvent = event.list.map((item) => {
            if(item._id === selectedEvent._id) {
                return {
                    ...selectedEvent
                }
            }
            return item;
        });

        dispatch(setEventsList(updatedEvent));
    }
    
    return <MainView event={currentEvent} handleUpdateParentEvent={handleUpdateParentEvent} user={user} />;
}

export default CreateUpdateEvent;