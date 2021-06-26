import Constants from './constants';

const requestEvents = () => ({
    type: Constants.REQUEST_EVENTS,
});

const requestEventByUser = (userId:string) => ({
    type: Constants.REQUEST_EVENT_BY_USER,
    userId
});

const requetsEventById = (id:string) => ({
    type: Constants.REQUEST_EVENT_ID,
    id
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


const requestJoinEvent = <T>(data:T) => ({
    type: Constants.REQUEST_JOIN_EVENT,
    data
});


const setJoinSuccess = () => ({
    type: Constants.REQUEST_JOIN_SUCCESS,
});

export {
    requestCreateUpdateEvent,
    requestEvents,
    requestEventByUser,
    requestCreateUpdateEventSuccess,
    requestCreateUpdateEventFailed,
    requestJoinEvent,
    setEventsList,
    setEventsListByUser
}