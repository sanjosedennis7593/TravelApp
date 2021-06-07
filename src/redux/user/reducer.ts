import Constants from './constants';


const initState = {
    isSignedIn: false,
    isLoading: false,
    currentUser: {}
};

export default user = (state = initState, action) => {

    switch (action.type) {
        case Constants.REQUEST_SIGN_IN:
            return {
                ...state,
                isLoading: true
            }
        case Constants.REQUEST_SIGN_UP:
            return {
                ...state,
                isLoading: true
            }
        case Constants.SET_CURRENT_USER:
            return {
                ...state,
                isSignedIn: true,
                isLoading: false,
                currentUser: {
                    ...(action.data || {})
                }
            }
        case Constants.REQUEST_LOGOUT:
            return {
                ...state,
                isSignedIn: false,
                isLoading: false,
                currentUser: {}
            }


        default:
            return state
    }
}