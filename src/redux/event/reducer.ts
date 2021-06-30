import Constants from './constants';


const initState = {
    isEventLoading: false,
    isMyEventLoading:false,
    isJoining: false,
    list: [],
    createdEvents: []
};

export default event = (state = initState, action) => {
    switch (action.type) {
        case Constants.REQUEST_EVENTS:
            return {
                ...state,
                isEventLoading: true,
                list: []
            }
        case Constants.REQUEST_EVENT_BY_USER:
            return {
                ...state,
                isMyEventLoading: true,
                createdEvents:[]
            }
        case Constants.REQUEST_CREATE_UPDATE_EVENT:
            return {
                ...state,
                isEventLoading: true
            }
        case Constants.REQUEST_CREATE_UPDATE_EVENT_SUCCESS:
            return {
                ...state,
                isEventLoading: false
            }
        case Constants.REQUEST_JOIN_EVENT:
            return {
                ...state,
                isJoining: false
            }
        case Constants.SET_EVENTS_LIST:
            return {
                ...state,
                isEventLoading: false,
                list: [...(action.data || [])]
            }
        case Constants.SET_EVENTS_LIST_BY_USER:
            return {
                ...state,
                isMyEventLoading: false,
                createdEvents: [...(action.data || [])]
            }
        case Constants.REQUEST_JOIN_SUCCESS:
            return {
                ...state,
                isJoining: false
            }
        default:
            return state
    }
}