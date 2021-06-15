import Constants from './constants';

const requestEvents = () => ({
    type: Constants.REQUEST_EVENTS,
});


const setEventsList = <T>(data:T) => ({
    type: Constants.SET_EVENTS_LIST,
    data
});

const requestCreateUpdateEvent = <T>(data: T) => ({
    type: Constants.REQUEST_CREATE_UPDATE_EVENT,
    data
});

const requestCreateUpdateEventSuccess = () => ({
    type: Constants.REQUEST_CREATE_UPDATE_EVENT_SUCCESS
});


const requestCreateUpdateEventFailed = () => ({
    type: Constants.REQUEST_CREATE_UPDATE_EVENT_FAILED
});



export {
    requestCreateUpdateEvent,
    requestEvents,
    requestCreateUpdateEventSuccess,
    requestCreateUpdateEventFailed,
    setEventsList
}