import Constants from './constants';

const requestEvents = () => ({
    type: Constants.REQUEST_EVENTS,
});

const requestEventByUser = <T>(user:T) => ({
    type: Constants.REQUEST_EVENT_BY_USER,
    user
});


const setEventsList = <T>(data:T) => ({
    type: Constants.SET_EVENTS_LIST,
    data
});

const setEventsListByUser = <T>(data:T) => ({
    type: Constants.SET_EVENTS_LIST_BY_USER,
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
    requestEventByUser,
    requestCreateUpdateEventSuccess,
    requestCreateUpdateEventFailed,
    setEventsList,
    setEventsListByUser
}