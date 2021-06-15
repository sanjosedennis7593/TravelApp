import Constants from './constants';


const initState = {
    isLoading: false,
    list: []
};

export default event = (state = initState, action) => {
    switch (action.type) {
        case Constants.REQUEST_EVENTS:
            return {
                ...state,
                isLoading: true
            }
        case Constants.REQUEST_CREATE_UPDATE_EVENT:
            return {
                ...state,
                isLoading: true
            }
        case Constants.REQUEST_CREATE_UPDATE_EVENT_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case Constants.SET_EVENTS_LIST:
            return {
                ...state,
                isLoading: false,
                list: [...(action.data || [])]
            }


        default:
            return state
    }
}