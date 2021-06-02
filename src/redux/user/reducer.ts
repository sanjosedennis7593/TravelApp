import Constants from './constants';


const initState = {
    isSignedIn: false,
    isLoading: false,
    user: {}
};

export default userReducer = (state = initState, action) => {

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
                user: action.data
            }


        default:
            return state
    }
}